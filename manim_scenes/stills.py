"""
Manim scenes for Linear Algebra KA still images.

Render all:
    manim -s -qh --format png stills.py

Render one:
    manim -s -qh --format png stills.py TwoLinesCrossing
"""

from manim import *
import numpy as np

# ── Shared Palette ──────────────────────────────────────────────────────────
BG       = "#1a1a2e"
RED_A    = "#e94560"
BLUE_A   = "#4d80e4"
GREEN_A  = "#16c79a"
YELLOW_A = "#f39c12"
GRID_C   = "#2a2a4a"
FAINT    = "#555555"
LABEL_C  = "#cccccc"


# ════════════════════════════════════════════════════════════════════════════
# 1.  Article 1.1 — Two Lines Crossing at (3, 2)
# ════════════════════════════════════════════════════════════════════════════
class TwoLinesCrossing(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1, 6, 1], y_range=[-1, 6, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 24, "include_ticks": True},
        ).shift(LEFT * 0.5)

        # x + y = 5  =>  y = 5 - x
        line1 = ax.plot(lambda x: 5 - x, x_range=[-0.5, 5.5], color=BLUE_A)
        lab1 = MathTex("x + y = 5", font_size=28, color=BLUE_A).next_to(
            ax.c2p(0.5, 4.5), RIGHT, buff=0.15)

        # x - y = 1  =>  y = x - 1
        line2 = ax.plot(lambda x: x - 1, x_range=[-0.5, 5.5], color=RED_A)
        lab2 = MathTex("x - y = 1", font_size=28, color=RED_A).next_to(
            ax.c2p(5, 3.5), RIGHT, buff=0.15)

        # Intersection dot
        dot = Dot(ax.c2p(3, 2), radius=0.1, color=GREEN_A)
        dot_label = MathTex("(3,\\,2)", font_size=30, color=GREEN_A).next_to(
            dot, UR, buff=0.15)

        title = Text("One Solution", font_size=28, color=LABEL_C).to_edge(UP, buff=0.4)

        self.add(ax, line1, line2, lab1, lab2, dot, dot_label, title)


# ════════════════════════════════════════════════════════════════════════════
# 2.  Article 1.1 — Two Parallel Lines
# ════════════════════════════════════════════════════════════════════════════
class TwoLinesParallel(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1, 9, 1], y_range=[-1, 9, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 24},
        ).shift(LEFT * 0.5)

        # x + y = 5  =>  y = 5 - x
        line1 = ax.plot(lambda x: 5 - x, x_range=[-0.5, 5.5], color=BLUE_A)
        lab1 = MathTex("x + y = 5", font_size=28, color=BLUE_A).next_to(
            ax.c2p(0.5, 4.5), RIGHT, buff=0.15)

        # x + y = 7  =>  y = 7 - x
        line2 = ax.plot(lambda x: 7 - x, x_range=[0, 7.5], color=RED_A)
        lab2 = MathTex("x + y = 7", font_size=28, color=RED_A).next_to(
            ax.c2p(1.5, 5.5), RIGHT, buff=0.15)

        title = Text("No Solution (Inconsistent)", font_size=28,
                      color=LABEL_C).to_edge(UP, buff=0.4)

        self.add(ax, line1, line2, lab1, lab2, title)


# ════════════════════════════════════════════════════════════════════════════
# 3.  Article 1.1 — Same Line (infinite solutions)
# ════════════════════════════════════════════════════════════════════════════
class TwoLinesSame(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1, 7, 1], y_range=[-1, 7, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 24},
        ).shift(LEFT * 0.5)

        # x + y = 5  =>  y = 5 - x  (both equations)
        line = ax.plot(lambda x: 5 - x, x_range=[-0.5, 5.5],
                       color=GREEN_A, stroke_width=5)

        lab1 = MathTex("x + y = 5", font_size=28, color=BLUE_A).next_to(
            ax.c2p(0.8, 4.8), RIGHT, buff=0.15)
        lab2 = MathTex("2x + 2y = 10", font_size=28, color=RED_A).next_to(
            lab1, DOWN, aligned_edge=LEFT, buff=0.2)
        brace_text = Text("same line!", font_size=22,
                          color=GREEN_A).next_to(lab2, DOWN, buff=0.15)

        title = Text("Infinitely Many Solutions", font_size=28,
                      color=LABEL_C).to_edge(UP, buff=0.4)

        self.add(ax, line, lab1, lab2, brace_text, title)


# ════════════════════════════════════════════════════════════════════════════
# 4.  Article 1.2 — Gaussian Elimination Flowchart
# ════════════════════════════════════════════════════════════════════════════
class GaussianEliminationFlowchart(Scene):
    def construct(self):
        self.camera.background_color = BG

        # Helper to make boxes
        def box(text, color=BLUE_A, w=4.5, h=0.7, font_size=22):
            r = RoundedRectangle(corner_radius=0.12, width=w, height=h,
                                 color=color, fill_color=color,
                                 fill_opacity=0.15, stroke_width=2)
            t = Text(text, font_size=font_size, color=color)
            t.move_to(r)
            return VGroup(r, t)

        # Nodes
        n1 = box("Write augmented matrix", GREEN_A)
        n2 = box("Find leftmost nonzero column", BLUE_A)
        n3 = box("Swap rows so pivot ≠ 0", BLUE_A)
        n4 = box("Scale pivot row to 1", BLUE_A)
        n5 = box("Eliminate below pivot", BLUE_A)
        n6 = box("More rows below?", YELLOW_A, w=3.5)
        n7 = box("Eliminate above each pivot\n(bottom → top)", RED_A, h=0.9)
        n8 = box("Read off solution from RREF", GREEN_A)

        nodes = VGroup(n1, n2, n3, n4, n5, n6, n7, n8)
        nodes.arrange(DOWN, buff=0.28).scale(0.85)

        # "Yes → repeat" loop
        yes_label = Text("Yes", font_size=18, color=YELLOW_A)
        no_label = Text("No", font_size=18, color=YELLOW_A)

        # Arrows
        arrows = VGroup()
        for i in range(len(nodes) - 1):
            if i == 5:  # n6 → n7 is "No"
                a = Arrow(n6.get_bottom(), n7.get_top(), buff=0.08,
                          color=FAINT, stroke_width=2, max_tip_length_to_length_ratio=0.15)
                no_label.next_to(a, RIGHT, buff=0.08)
                arrows.add(a, no_label)
            else:
                a = Arrow(nodes[i].get_bottom(), nodes[i + 1].get_top(),
                          buff=0.08, color=FAINT, stroke_width=2,
                          max_tip_length_to_length_ratio=0.15)
                arrows.add(a)

        # Loop arrow: n6 right side back up to n2
        loop_start = n6.get_right()
        p1 = loop_start + RIGHT * 1.2
        p2 = n2.get_right() + RIGHT * 1.2
        loop_end = n2.get_right()
        loop = CurvedArrow(p1, p2, angle=-TAU / 4,
                           color=YELLOW_A, stroke_width=2,
                           tip_length=0.15)
        yes_label.next_to(loop, RIGHT, buff=0.08)

        # Arrow tips from p2 to loop_end
        final_arrow = Arrow(p2, loop_end, buff=0.05,
                            color=YELLOW_A, stroke_width=2,
                            max_tip_length_to_length_ratio=0.25)

        # Dashed line from loop_start to p1
        dash1 = DashedLine(loop_start, p1, color=YELLOW_A, stroke_width=2)

        title_label = VGroup(
            Text("Forward Phase", font_size=20, color=BLUE_A),
            Text("(REF)", font_size=18, color=FAINT),
        ).arrange(RIGHT, buff=0.15).next_to(n2, LEFT, buff=0.6)

        back_label = VGroup(
            Text("Backward Phase", font_size=20, color=RED_A),
            Text("(RREF)", font_size=18, color=FAINT),
        ).arrange(RIGHT, buff=0.15).next_to(n7, LEFT, buff=0.4)

        self.add(nodes, arrows, dash1, loop, final_arrow, yes_label,
                 title_label, back_label)


# ════════════════════════════════════════════════════════════════════════════
# 5.  Article 1.3 — Existence / Uniqueness Flowchart
# ════════════════════════════════════════════════════════════════════════════
class ExistenceUniquenessFlowchart(Scene):
    def construct(self):
        self.camera.background_color = BG

        def diamond(text, color=YELLOW_A, w=5, h=1.2, font_size=20):
            d = Polygon(
                UP * h / 2, RIGHT * w / 2, DOWN * h / 2, LEFT * w / 2,
                color=color, fill_color=color, fill_opacity=0.1,
                stroke_width=2,
            )
            t = Text(text, font_size=font_size, color=color)
            t.move_to(d)
            return VGroup(d, t)

        def result_box(text, color=GREEN_A, font_size=22):
            r = RoundedRectangle(corner_radius=0.12, width=4, height=0.8,
                                 color=color, fill_color=color,
                                 fill_opacity=0.15, stroke_width=2)
            t = Text(text, font_size=font_size, color=color)
            t.move_to(r)
            return VGroup(r, t)

        start = RoundedRectangle(corner_radius=0.12, width=4, height=0.7,
                                  color=BLUE_A, fill_color=BLUE_A,
                                  fill_opacity=0.15, stroke_width=2)
        start_t = Text("Row reduce to RREF", font_size=22, color=BLUE_A)
        start_t.move_to(start)
        start_g = VGroup(start, start_t).to_edge(UP, buff=0.8)

        q1 = diamond("Pivot in augmented column?", w=4.5)
        q1.next_to(start_g, DOWN, buff=0.6)

        no_sol = result_box("No Solution", RED_A)
        no_sol.next_to(q1, RIGHT, buff=0.6)

        q2 = diamond("Any free variables?", w=4.5)
        q2.next_to(q1, DOWN, buff=0.8)

        unique = result_box("Unique Solution", GREEN_A)
        unique.next_to(q2, RIGHT, buff=0.6)

        infinite = result_box("Infinitely Many\nSolutions", YELLOW_A)
        infinite.next_to(q2, DOWN, buff=0.6)

        # Arrows
        a1 = Arrow(start_g.get_bottom(), q1.get_top(), buff=0.08,
                    color=FAINT, stroke_width=2)
        a2 = Arrow(q1.get_right(), no_sol.get_left(), buff=0.08,
                    color=FAINT, stroke_width=2)
        yes1 = Text("Yes", font_size=18, color=RED_A).next_to(a2, UP, buff=0.05)

        a3 = Arrow(q1.get_bottom(), q2.get_top(), buff=0.08,
                    color=FAINT, stroke_width=2)
        no1 = Text("No", font_size=18, color=GREEN_A).next_to(a3, RIGHT, buff=0.05)

        a4 = Arrow(q2.get_right(), unique.get_left(), buff=0.08,
                    color=FAINT, stroke_width=2)
        no2 = Text("No", font_size=18, color=GREEN_A).next_to(a4, UP, buff=0.05)

        a5 = Arrow(q2.get_bottom(), infinite.get_top(), buff=0.08,
                    color=FAINT, stroke_width=2)
        yes2 = Text("Yes", font_size=18, color=YELLOW_A).next_to(a5, RIGHT, buff=0.05)

        self.add(start_g, q1, no_sol, q2, unique, infinite,
                 a1, a2, a3, a4, a5, yes1, no1, no2, yes2)


# ════════════════════════════════════════════════════════════════════════════
# 6.  Article 1.4 — Parabola Through Three Points
# ════════════════════════════════════════════════════════════════════════════
class ParabolaThroughPoints(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1, 5, 1], y_range=[-1, 8, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 24},
        ).shift(LEFT * 0.5)

        # y = x^2 - 2x + 3
        parabola = ax.plot(lambda x: x ** 2 - 2 * x + 3,
                           x_range=[-0.3, 4.3], color=GREEN_A,
                           stroke_width=3)
        parabola_label = MathTex("y = x^2 - 2x + 3", font_size=28,
                                 color=GREEN_A).next_to(
            ax.c2p(3.5, 6.5), RIGHT, buff=0.15)

        # Points: (1,2), (2,3), (3,6)
        pts = [(1, 2), (2, 3), (3, 6)]
        dots = VGroup()
        labels = VGroup()
        for x, y in pts:
            d = Dot(ax.c2p(x, y), radius=0.1, color=YELLOW_A)
            l = MathTex(f"({x},\\,{y})", font_size=24, color=YELLOW_A)
            l.next_to(d, UL, buff=0.12)
            dots.add(d)
            labels.add(l)

        title = Text("Curve Fitting: Parabola Through 3 Points",
                      font_size=26, color=LABEL_C).to_edge(UP, buff=0.4)

        self.add(ax, parabola, parabola_label, dots, labels, title)


# ════════════════════════════════════════════════════════════════════════════
# 7.  Article 2.2 — Span of One Vector (line through origin)
# ════════════════════════════════════════════════════════════════════════════
class SpanOfOneVector(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-5, 5, 1], y_range=[-3, 3, 1],
            x_length=10, y_length=6,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 22},
        )

        # Direction (2, 1)
        # The span line
        span_line = ax.plot(lambda x: x / 2, x_range=[-4.5, 4.5],
                            color=GREEN_A, stroke_width=2,
                            stroke_opacity=0.4)

        # The vector itself
        v = Arrow(ax.c2p(0, 0), ax.c2p(2, 1), buff=0,
                  color=RED_A, stroke_width=4, max_tip_length_to_length_ratio=0.15)
        v_label = MathTex(r"\mathbf{v} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}",
                          font_size=26, color=RED_A).next_to(v, UR, buff=0.15)

        # Scalar multiples
        scalars = [-2, -1, 0.5, 1.5, 2]
        mult_dots = VGroup()
        mult_labels = VGroup()
        for c in scalars:
            d = Dot(ax.c2p(2 * c, c), radius=0.07, color=YELLOW_A)
            l = MathTex(f"{c}" + r"\mathbf{v}", font_size=20,
                        color=YELLOW_A).next_to(d, DOWN, buff=0.12)
            mult_dots.add(d)
            mult_labels.add(l)

        title = MathTex(r"\text{Span}\{\mathbf{v}\} = \text{a line through the origin}",
                        font_size=30, color=LABEL_C).to_edge(UP, buff=0.4)

        self.add(ax, span_line, v, v_label, mult_dots, mult_labels, title)


# ════════════════════════════════════════════════════════════════════════════
# 8.  Article 2.3 — Dependent vs Independent Vectors
# ════════════════════════════════════════════════════════════════════════════
class DependentVsIndependent(Scene):
    def construct(self):
        self.camera.background_color = BG

        # ── Left panel: DEPENDENT (parallel) ──
        ax_l = Axes(
            x_range=[-3, 4, 1], y_range=[-4, 3, 1],
            x_length=5, y_length=5,
            axis_config={"color": FAINT, "include_ticks": False},
        ).shift(LEFT * 3.5)

        v1_dep = Arrow(ax_l.c2p(0, 0), ax_l.c2p(1, 2), buff=0,
                       color=BLUE_A, stroke_width=4,
                       max_tip_length_to_length_ratio=0.2)
        v1_lab = MathTex(r"\mathbf{v}_1", font_size=24,
                         color=BLUE_A).next_to(v1_dep, LEFT, buff=0.1)

        v2_dep = Arrow(ax_l.c2p(0, 0), ax_l.c2p(-2, -4), buff=0,
                       color=RED_A, stroke_width=4,
                       max_tip_length_to_length_ratio=0.12)
        v2_lab = MathTex(r"\mathbf{v}_2 = -3\mathbf{v}_1", font_size=22,
                         color=RED_A).next_to(v2_dep.get_end(), RIGHT, buff=0.15)

        dep_title = Text("Dependent", font_size=24, color=RED_A)
        dep_sub = Text("(parallel)", font_size=18, color=FAINT)
        dep_header = VGroup(dep_title, dep_sub).arrange(DOWN, buff=0.08)
        dep_header.next_to(ax_l, UP, buff=0.3)

        # ── Right panel: INDEPENDENT (non-parallel) ──
        ax_r = Axes(
            x_range=[-2, 4, 1], y_range=[-2, 4, 1],
            x_length=5, y_length=5,
            axis_config={"color": FAINT, "include_ticks": False},
        ).shift(RIGHT * 3.5)

        u1 = Arrow(ax_r.c2p(0, 0), ax_r.c2p(2, 1), buff=0,
                   color=BLUE_A, stroke_width=4,
                   max_tip_length_to_length_ratio=0.2)
        u1_lab = MathTex(r"\mathbf{v}_1", font_size=24,
                         color=BLUE_A).next_to(u1, DOWN, buff=0.1)

        u2 = Arrow(ax_r.c2p(0, 0), ax_r.c2p(1, 3), buff=0,
                   color=GREEN_A, stroke_width=4,
                   max_tip_length_to_length_ratio=0.2)
        u2_lab = MathTex(r"\mathbf{v}_2", font_size=24,
                         color=GREEN_A).next_to(u2, LEFT, buff=0.1)

        ind_title = Text("Independent", font_size=24, color=GREEN_A)
        ind_sub = Text("(not parallel)", font_size=18, color=FAINT)
        ind_header = VGroup(ind_title, ind_sub).arrange(DOWN, buff=0.08)
        ind_header.next_to(ax_r, UP, buff=0.3)

        # Divider
        divider = DashedLine(UP * 3.2, DOWN * 3.2, color=FAINT,
                             stroke_width=1)

        self.add(ax_l, v1_dep, v1_lab, v2_dep, v2_lab, dep_header,
                 divider,
                 ax_r, u1, u1_lab, u2, u2_lab, ind_header)


# ════════════════════════════════════════════════════════════════════════════
# 9.  Article 3.2 — Unit Square Scaled to 2×3 Rectangle
# ════════════════════════════════════════════════════════════════════════════
class UnitSquareScaled(Scene):
    def construct(self):
        self.camera.background_color = BG

        # ── Left: Before ──
        ax_l = Axes(
            x_range=[-0.5, 3.5, 1], y_range=[-0.5, 4.5, 1],
            x_length=4, y_length=5,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 20},
        ).shift(LEFT * 3.5)

        sq = Polygon(
            ax_l.c2p(0, 0), ax_l.c2p(1, 0), ax_l.c2p(1, 1), ax_l.c2p(0, 1),
            color=BLUE_A, fill_color=BLUE_A, fill_opacity=0.2,
            stroke_width=2,
        )
        sq_label = Text("Unit Square", font_size=20,
                         color=BLUE_A).next_to(sq, DOWN, buff=0.2)

        e1_l = Arrow(ax_l.c2p(0, 0), ax_l.c2p(1, 0), buff=0,
                     color=RED_A, stroke_width=3)
        e1_lab = MathTex(r"\mathbf{e}_1", font_size=22,
                         color=RED_A).next_to(e1_l, DOWN, buff=0.08)
        e2_l = Arrow(ax_l.c2p(0, 0), ax_l.c2p(0, 1), buff=0,
                     color=GREEN_A, stroke_width=3)
        e2_lab = MathTex(r"\mathbf{e}_2", font_size=22,
                         color=GREEN_A).next_to(e2_l, LEFT, buff=0.08)

        before_title = Text("Before", font_size=22,
                            color=LABEL_C).next_to(ax_l, UP, buff=0.3)

        # ── Right: After ──
        ax_r = Axes(
            x_range=[-0.5, 3.5, 1], y_range=[-0.5, 4.5, 1],
            x_length=4, y_length=5,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 20},
        ).shift(RIGHT * 3.5)

        rect = Polygon(
            ax_r.c2p(0, 0), ax_r.c2p(2, 0), ax_r.c2p(2, 3), ax_r.c2p(0, 3),
            color=YELLOW_A, fill_color=YELLOW_A, fill_opacity=0.2,
            stroke_width=2,
        )
        rect_label = Text("2 × 3 Rectangle", font_size=20,
                           color=YELLOW_A).next_to(rect, DOWN, buff=0.2)

        e1_r = Arrow(ax_r.c2p(0, 0), ax_r.c2p(2, 0), buff=0,
                     color=RED_A, stroke_width=3)
        e1r_lab = MathTex(r"2\mathbf{e}_1", font_size=22,
                          color=RED_A).next_to(e1_r, DOWN, buff=0.08)
        e2_r = Arrow(ax_r.c2p(0, 0), ax_r.c2p(0, 3), buff=0,
                     color=GREEN_A, stroke_width=3)
        e2r_lab = MathTex(r"3\mathbf{e}_2", font_size=22,
                          color=GREEN_A).next_to(e2_r, LEFT, buff=0.08)

        after_title = Text("After", font_size=22,
                           color=LABEL_C).next_to(ax_r, UP, buff=0.3)

        # Arrow between panels
        big_arrow = Arrow(LEFT * 0.8, RIGHT * 0.8, color=YELLOW_A,
                          stroke_width=3)
        mat_label = MathTex(
            r"A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}",
            font_size=26, color=YELLOW_A
        ).next_to(big_arrow, UP, buff=0.15)

        self.add(ax_l, sq, sq_label, e1_l, e1_lab, e2_l, e2_lab, before_title,
                 big_arrow, mat_label,
                 ax_r, rect, rect_label, e1_r, e1r_lab, e2_r, e2r_lab,
                 after_title)


# ════════════════════════════════════════════════════════════════════════════
# 10. Article 3.3 — Reflection Across y = x
# ════════════════════════════════════════════════════════════════════════════
class ReflectionAcrossYEqualsX(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1.5, 2.5, 1], y_range=[-1.5, 2.5, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 22},
        )

        # y = x line
        mirror = ax.plot(lambda x: x, x_range=[-1.2, 2.2],
                         color=FAINT, stroke_width=2)
        mirror_label = MathTex("y = x", font_size=24,
                               color=FAINT).next_to(
            ax.c2p(1.8, 1.8), UR, buff=0.1)

        # e1 before
        e1 = Arrow(ax.c2p(0, 0), ax.c2p(1, 0), buff=0,
                   color=RED_A, stroke_width=4,
                   max_tip_length_to_length_ratio=0.25)
        e1_lab = MathTex(r"\mathbf{e}_1", font_size=24,
                         color=RED_A).next_to(e1.get_end(), DR, buff=0.08)

        # e1 after (reflected to (0,1))
        e1_r = Arrow(ax.c2p(0, 0), ax.c2p(0, 1), buff=0,
                     color=RED_A, stroke_width=4,
                     max_tip_length_to_length_ratio=0.25,
                     stroke_opacity=0.5)
        e1_r_lab = MathTex(r"T(\mathbf{e}_1) = \begin{bmatrix} 0 \\ 1 \end{bmatrix}",
                           font_size=22, color=RED_A).next_to(
            e1_r.get_end(), UL, buff=0.08)

        # e2 before
        e2 = Arrow(ax.c2p(0, 0), ax.c2p(0, 1), buff=0,
                   color=GREEN_A, stroke_width=4,
                   max_tip_length_to_length_ratio=0.25)
        e2_lab = MathTex(r"\mathbf{e}_2", font_size=24,
                         color=GREEN_A).next_to(
            ax.c2p(-0.1, 0.5), LEFT, buff=0.15)

        # e2 after (reflected to (1,0))
        e2_r = Arrow(ax.c2p(0, 0), ax.c2p(1, 0), buff=0,
                     color=GREEN_A, stroke_width=4,
                     max_tip_length_to_length_ratio=0.25,
                     stroke_opacity=0.5)
        e2_r_lab = MathTex(r"T(\mathbf{e}_2) = \begin{bmatrix} 1 \\ 0 \end{bmatrix}",
                           font_size=22, color=GREEN_A).next_to(
            ax.c2p(1, -0.15), DOWN, buff=0.08)

        # Dashed arcs showing reflection
        arc1 = ArcBetweenPoints(ax.c2p(1, 0), ax.c2p(0, 1),
                                angle=-TAU / 4, color=RED_A,
                                stroke_width=1.5, stroke_opacity=0.4)
        arc2 = ArcBetweenPoints(ax.c2p(0, 1), ax.c2p(1, 0),
                                angle=-TAU / 4, color=GREEN_A,
                                stroke_width=1.5, stroke_opacity=0.4)

        # Matrix result
        mat = MathTex(
            r"A = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}",
            font_size=30, color=LABEL_C
        ).to_corner(UR, buff=0.5)

        title = Text("Reflection across y = x", font_size=26,
                      color=LABEL_C).to_edge(UP, buff=0.3)

        self.add(ax, mirror, mirror_label,
                 e1, e1_lab, e1_r, e1_r_lab, arc1,
                 e2, e2_lab, e2_r, e2_r_lab, arc2,
                 mat, title)


# ════════════════════════════════════════════════════════════════════════════
# 11. Article 1.4 — Traffic Flow Network
# ════════════════════════════════════════════════════════════════════════════
class TrafficFlowNetwork(Scene):
    def construct(self):
        self.camera.background_color = BG

        title = Text("Traffic Flow Network", font_size=28,
                      color=LABEL_C).to_edge(UP, buff=0.4)

        # Nodes
        def node_circle(label, color=BLUE_A):
            c = Circle(radius=0.4, color=color, fill_color=color,
                       fill_opacity=0.15, stroke_width=2)
            t = Text(label, font_size=24, color=color)
            t.move_to(c)
            return VGroup(c, t)

        A = node_circle("A", BLUE_A).move_to(UP * 1.5)
        B = node_circle("B", RED_A).move_to(DOWN * 1 + LEFT * 2.5)
        C = node_circle("C", GREEN_A).move_to(DOWN * 1 + RIGHT * 2.5)

        # External flows (in)
        in_top = Arrow(UP * 3, A.get_top(), buff=0.1, color=YELLOW_A, stroke_width=3)
        in_top_lab = Text("400", font_size=22, color=YELLOW_A).next_to(in_top, RIGHT, buff=0.1)

        in_left = Arrow(LEFT * 4.5 + DOWN * 1, B.get_left(), buff=0.1, color=YELLOW_A, stroke_width=3)
        in_left_lab = Text("500", font_size=22, color=YELLOW_A).next_to(in_left, DOWN, buff=0.1)

        # External flows (out)
        out_right = Arrow(C.get_right(), RIGHT * 4.5 + DOWN * 1, buff=0.1, color=YELLOW_A, stroke_width=3)
        out_right_lab = Text("600", font_size=22, color=YELLOW_A).next_to(out_right, DOWN, buff=0.1)

        out_bottom = Arrow(B.get_bottom(), DOWN * 3 + LEFT * 2.5, buff=0.1, color=YELLOW_A, stroke_width=3)
        out_bottom_lab = Text("300", font_size=22, color=YELLOW_A).next_to(out_bottom, RIGHT, buff=0.1)

        # Internal flows
        arr_ab = Arrow(A.get_bottom() + LEFT * 0.2, B.get_top() + RIGHT * 0.2,
                       buff=0.1, color=LABEL_C, stroke_width=2.5)
        lab_ab = MathTex("x_1", font_size=26, color=LABEL_C).next_to(arr_ab, LEFT, buff=0.1)

        arr_ac = Arrow(A.get_bottom() + RIGHT * 0.2, C.get_top() + LEFT * 0.2,
                       buff=0.1, color=LABEL_C, stroke_width=2.5)
        lab_ac = MathTex("x_2", font_size=26, color=LABEL_C).next_to(arr_ac, RIGHT, buff=0.1)

        arr_bc = Arrow(B.get_right(), C.get_left(), buff=0.1,
                       color=LABEL_C, stroke_width=2.5)
        lab_bc = MathTex("x_3", font_size=26, color=LABEL_C).next_to(arr_bc, DOWN, buff=0.1)

        # Conservation equations
        eqs = VGroup(
            MathTex(r"\text{A: } 400 = x_1 + x_2", font_size=22, color=BLUE_A),
            MathTex(r"\text{B: } 500 + x_1 = x_3 + 300", font_size=22, color=RED_A),
            MathTex(r"\text{C: } x_2 + x_3 = 600", font_size=22, color=GREEN_A),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.15).to_corner(DR, buff=0.5)

        eq_title = Text("Flow in = Flow out", font_size=18,
                        color=FAINT).next_to(eqs, UP, buff=0.15)

        self.add(title, A, B, C,
                 in_top, in_top_lab, in_left, in_left_lab,
                 out_right, out_right_lab, out_bottom, out_bottom_lab,
                 arr_ab, lab_ab, arr_ac, lab_ac, arr_bc, lab_bc,
                 eqs, eq_title)


# ════════════════════════════════════════════════════════════════════════════
# 12. Article 3.1 — Matrix Dimension Matching
# ════════════════════════════════════════════════════════════════════════════
class DimensionMatching(Scene):
    def construct(self):
        self.camera.background_color = BG

        title = Text("Matrix × Vector: Dimensions Must Match",
                      font_size=26, color=LABEL_C).to_edge(UP, buff=0.4)

        # ── Valid multiplication ──
        valid_title = Text("✓  Valid", font_size=22, color=GREEN_A)

        a_box = RoundedRectangle(corner_radius=0.1, width=2.2, height=1.6,
                                  color=BLUE_A, fill_color=BLUE_A,
                                  fill_opacity=0.1, stroke_width=2)
        a_label = MathTex("A", font_size=28, color=BLUE_A).move_to(a_box)
        a_dim = MathTex(r"m \times n", font_size=20, color=BLUE_A).next_to(a_box, DOWN, buff=0.08)

        x_box = RoundedRectangle(corner_radius=0.1, width=0.8, height=1.6,
                                  color=YELLOW_A, fill_color=YELLOW_A,
                                  fill_opacity=0.1, stroke_width=2)
        x_label = MathTex(r"\mathbf{x}", font_size=28, color=YELLOW_A).move_to(x_box)
        x_dim = MathTex(r"n \times 1", font_size=20, color=YELLOW_A).next_to(x_box, DOWN, buff=0.08)

        eq_sign = MathTex("=", font_size=30, color=LABEL_C)

        b_box = RoundedRectangle(corner_radius=0.1, width=0.8, height=1.6,
                                  color=GREEN_A, fill_color=GREEN_A,
                                  fill_opacity=0.1, stroke_width=2)
        b_label = MathTex(r"A\mathbf{x}", font_size=24, color=GREEN_A).move_to(b_box)
        b_dim = MathTex(r"m \times 1", font_size=20, color=GREEN_A).next_to(b_box, DOWN, buff=0.08)

        valid_group = VGroup(a_box, x_box, eq_sign, b_box)
        a_box.next_to(ORIGIN, LEFT, buff=0.15)
        x_box.next_to(a_box, RIGHT, buff=0.15)
        eq_sign.next_to(x_box, RIGHT, buff=0.3)
        b_box.next_to(eq_sign, RIGHT, buff=0.3)

        # Match brace
        match_brace = BraceBetweenPoints(
            a_dim.get_right() + RIGHT * 0.05,
            x_dim.get_left() + LEFT * 0.05,
            direction=DOWN, color=GREEN_A
        )
        match_text = Text("must match!", font_size=16, color=GREEN_A).next_to(match_brace, DOWN, buff=0.05)

        all_valid = VGroup(valid_group, a_label, a_dim, x_label, x_dim,
                           eq_sign, b_label, b_dim, match_brace, match_text,
                           valid_title)
        valid_title.next_to(valid_group, UP, buff=0.3)
        all_valid.shift(UP * 0.3)

        # ── Invalid example ──
        invalid_title = Text("✗  Invalid", font_size=22, color=RED_A)

        bad_a = RoundedRectangle(corner_radius=0.1, width=2.2, height=1,
                                  color=BLUE_A, fill_color=BLUE_A,
                                  fill_opacity=0.1, stroke_width=2)
        bad_a_lab = MathTex(r"2 \times 3", font_size=20, color=BLUE_A).move_to(bad_a)

        bad_x = RoundedRectangle(corner_radius=0.1, width=0.8, height=0.8,
                                  color=RED_A, fill_color=RED_A,
                                  fill_opacity=0.1, stroke_width=2)
        bad_x_lab = MathTex(r"2 \times 1", font_size=20, color=RED_A).move_to(bad_x)

        bad_eq = MathTex(r"= \text{ undefined!}", font_size=22, color=RED_A)

        bad_group = VGroup(bad_a, bad_x, bad_eq).arrange(RIGHT, buff=0.2)
        invalid_title.next_to(bad_group, UP, buff=0.15)

        bad_brace = BraceBetweenPoints(
            bad_a.get_bottom() + RIGHT * 0.9,
            bad_x.get_bottom() + LEFT * 0.3,
            direction=DOWN, color=RED_A
        )
        bad_text = MathTex(r"3 \neq 2", font_size=18, color=RED_A).next_to(bad_brace, DOWN, buff=0.05)

        all_invalid = VGroup(bad_group, invalid_title, bad_a_lab, bad_x_lab,
                             bad_brace, bad_text)
        all_invalid.next_to(all_valid, DOWN, buff=0.7)

        self.add(title, all_valid, all_invalid)
