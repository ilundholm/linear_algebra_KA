"""
Manim video scenes for Linear Algebra KA.

Render all:
    manim -qm --format mp4 manim_scenes/videos.py --media_dir ./media

Render one:
    manim -qm --format mp4 manim_scenes/videos.py TwoLinesIntersection --media_dir ./media
"""

from manim import *
import numpy as np

# ── Shared Palette ──────────────────────────────────────────────────────────
BG       = "#1a1a2e"
RED_A    = "#e94560"
BLUE_A   = "#4d80e4"
GREEN_A  = "#16c79a"
YELLOW_A = "#f39c12"
FAINT    = "#555555"
LABEL_C  = "#cccccc"


# ════════════════════════════════════════════════════════════════════════════
# 1.  Article 1.1 — Two lines intersection (DONE)
# ════════════════════════════════════════════════════════════════════════════
class TwoLinesIntersection(Scene):
    def construct(self):
        self.camera.background_color = BG
        ax = Axes(
            x_range=[-1, 6, 1], y_range=[-1, 6, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 24},
        ).shift(LEFT * 0.5)
        ax_labels = ax.get_axis_labels(
            x_label=MathTex("x", font_size=28, color=LABEL_C),
            y_label=MathTex("y", font_size=28, color=LABEL_C),
        )
        line1 = ax.plot(lambda x: 5 - x, x_range=[-0.5, 5.5], color=BLUE_A, stroke_width=3)
        lab1 = MathTex("x + y = 5", font_size=32, color=BLUE_A).next_to(ax.c2p(0.5, 4.5), RIGHT, buff=0.15)
        line2 = ax.plot(lambda x: x - 1, x_range=[-0.5, 5.5], color=RED_A, stroke_width=3)
        lab2 = MathTex("x - y = 1", font_size=32, color=RED_A).next_to(ax.c2p(5, 3.5), RIGHT, buff=0.15)
        dot = Dot(ax.c2p(3, 2), radius=0.12, color=GREEN_A)
        dot_label = MathTex("(3,\\,2)", font_size=34, color=GREEN_A).next_to(dot, UR, buff=0.15)
        sol = Text("Solution!", font_size=28, color=GREEN_A).next_to(dot_label, RIGHT, buff=0.3)

        self.play(Create(ax), Write(ax_labels), run_time=1.5)
        self.wait(0.3)
        self.play(Create(line1), run_time=1.2)
        self.play(FadeIn(lab1), run_time=0.6)
        self.wait(0.5)
        self.play(Create(line2), run_time=1.2)
        self.play(FadeIn(lab2), run_time=0.6)
        self.wait(0.5)
        self.play(FadeIn(dot, scale=3), run_time=0.8)
        self.play(Flash(dot, color=GREEN_A, flash_radius=0.4, num_lines=12), Write(dot_label), run_time=1.0)
        self.play(FadeIn(sol, shift=RIGHT * 0.3), run_time=0.6)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1.0)


# ════════════════════════════════════════════════════════════════════════════
# 2.  Article 1.1 — Three planes meeting in 3D
# ════════════════════════════════════════════════════════════════════════════
class ThreePlanesIntersection(ThreeDScene):
    def construct(self):
        self.camera.background_color = BG
        self.set_camera_orientation(phi=65 * DEGREES, theta=-45 * DEGREES)

        ax = ThreeDAxes(
            x_range=[-1, 5], y_range=[-1, 5], z_range=[-1, 5],
            x_length=5, y_length=5, z_length=5,
            axis_config={"color": FAINT},
        )

        # Plane 1: x + y + z = 6  → z = 6 - x - y
        p1 = Surface(
            lambda u, v: ax.c2p(u, v, 6 - u - v),
            u_range=[0, 4], v_range=[0, 4],
            fill_color=BLUE_A, fill_opacity=0.3,
            stroke_color=BLUE_A, stroke_width=0.5,
            resolution=(8, 8),
        )
        # Plane 2: x - y + z = 2  → z = 2 - x + y
        p2 = Surface(
            lambda u, v: ax.c2p(u, v, 2 - u + v),
            u_range=[0, 4], v_range=[0, 4],
            fill_color=RED_A, fill_opacity=0.3,
            stroke_color=RED_A, stroke_width=0.5,
            resolution=(8, 8),
        )
        # Plane 3: x + y - z = 0  → z = x + y
        p3 = Surface(
            lambda u, v: ax.c2p(u, v, u + v),
            u_range=[0, 4], v_range=[0, 4],
            fill_color=GREEN_A, fill_opacity=0.3,
            stroke_color=GREEN_A, stroke_width=0.5,
            resolution=(8, 8),
        )

        # Solution: (1, 2, 3)
        dot = Dot3D(ax.c2p(1, 2, 3), radius=0.08, color=YELLOW_A)

        self.play(Create(ax), run_time=1)
        self.play(FadeIn(p1), run_time=1.5)
        self.wait(0.5)
        self.play(FadeIn(p2), run_time=1.5)
        self.wait(0.5)
        self.play(FadeIn(p3), run_time=1.5)
        self.wait(0.5)
        self.play(FadeIn(dot, scale=3), Flash(dot, color=YELLOW_A, flash_radius=0.3), run_time=1)
        self.begin_ambient_camera_rotation(rate=0.15)
        self.wait(4)
        self.stop_ambient_camera_rotation()
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 3.  Article 1.2 — Row reduction staircase emerging (2×3 system)
# ════════════════════════════════════════════════════════════════════════════
class RowReductionStaircase(Scene):
    def construct(self):
        self.camera.background_color = BG

        def mat_mob(entries, pivots=None):
            """Create matrix MathTex with highlighted pivots."""
            rows = []
            for r_idx, row in enumerate(entries):
                row_strs = []
                for c_idx, val in enumerate(row):
                    row_strs.append(str(val))
                rows.append(" & ".join(row_strs))
            tex = r"\left[\begin{array}{ccc|c}" + r"\\".join(rows) + r"\end{array}\right]"
            m = MathTex(tex, font_size=36, color=LABEL_C)
            return m

        title = Text("Row Reduction: Staircase Pattern", font_size=28, color=LABEL_C).to_edge(UP, buff=0.5)
        self.play(Write(title))

        # Step 0: original
        m0 = mat_mob([[1, 2, 1, 4], [2, 5, 1, 7], [3, 6, 4, 15]])
        m0.move_to(ORIGIN)
        step0 = Text("Start", font_size=22, color=FAINT).next_to(m0, DOWN, buff=0.3)
        self.play(Write(m0), FadeIn(step0), run_time=1.5)
        self.wait(1)

        # Step 1: R2 - 2R1, R3 - 3R1
        m1 = mat_mob([[1, 2, 1, 4], [0, 1, -1, -1], [0, 0, 1, 3]])
        m1.move_to(ORIGIN)
        step1 = MathTex(r"R_2 - 2R_1,\ R_3 - 3R_1", font_size=22, color=YELLOW_A).next_to(m1, DOWN, buff=0.3)
        self.play(ReplacementTransform(m0, m1), FadeOut(step0), FadeIn(step1), run_time=1.5)
        self.wait(1)

        # Highlight staircase
        stair_text = Text("Staircase!", font_size=26, color=GREEN_A).next_to(m1, RIGHT, buff=0.5)
        self.play(FadeIn(stair_text), run_time=0.8)
        self.wait(1)

        # Step 2: Back-substitute to RREF
        m2 = mat_mob([[1, 0, 0, 1], [0, 1, 0, 2], [0, 0, 1, 3]])
        m2.move_to(ORIGIN)
        step2 = Text("Back-substitute → RREF", font_size=22, color=GREEN_A).next_to(m2, DOWN, buff=0.3)
        self.play(ReplacementTransform(m1, m2), FadeOut(step1), FadeOut(stair_text), FadeIn(step2), run_time=1.5)
        self.wait(1)

        sol = MathTex(r"x=1,\ y=2,\ z=3", font_size=32, color=GREEN_A).next_to(m2, RIGHT, buff=0.6)
        self.play(Write(sol), run_time=1)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 4.  Article 1.2 — Full 3×3 row reduction walkthrough
# ════════════════════════════════════════════════════════════════════════════
class FullRowReduction3x3(Scene):
    def construct(self):
        self.camera.background_color = BG

        def mat_tex(entries):
            rows = [" & ".join(str(v) for v in row) for row in entries]
            tex = r"\left[\begin{array}{ccc|c}" + r"\\".join(rows) + r"\end{array}\right]"
            return MathTex(tex, font_size=34, color=LABEL_C)

        title = Text("3×3 Row Reduction", font_size=28, color=LABEL_C).to_edge(UP, buff=0.5)
        self.play(Write(title))

        steps = [
            ([[1,1,1,6],[2,1,-1,1],[1,-1,2,5]], "Original System"),
            ([[1,1,1,6],[0,-1,-3,-11],[0,-2,1,-1]], r"R_2 - 2R_1,\ R_3 - R_1"),
            ([[1,1,1,6],[0,1,3,11],[0,-2,1,-1]], r"R_2 \times (-1)"),
            ([[1,1,1,6],[0,1,3,11],[0,0,7,21]], r"R_3 + 2R_2"),
            ([[1,1,1,6],[0,1,3,11],[0,0,1,3]], r"R_3 \div 7"),
            ([[1,1,0,3],[0,1,0,2],[0,0,1,3]], r"R_1 - R_3,\ R_2 - 3R_3"),
            ([[1,0,0,1],[0,1,0,2],[0,0,1,3]], r"R_1 - R_2"),
        ]

        prev_mat = None
        prev_label = None
        for i, (entries, label_text) in enumerate(steps):
            m = mat_tex(entries).move_to(ORIGIN)
            lab = MathTex(label_text, font_size=22, color=YELLOW_A) if i > 0 else Text(label_text, font_size=22, color=FAINT)
            lab.next_to(m, DOWN, buff=0.3)
            if prev_mat is None:
                self.play(Write(m), FadeIn(lab), run_time=1.5)
            else:
                self.play(ReplacementTransform(prev_mat, m), FadeOut(prev_label), FadeIn(lab), run_time=1.2)
            self.wait(1.2)
            prev_mat = m
            prev_label = lab

        sol = MathTex(r"x=1,\ y=2,\ z=3", font_size=34, color=GREEN_A).next_to(prev_mat, RIGHT, buff=0.5)
        self.play(Write(sol), run_time=1)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 5.  Article 1.3 — Plane in 3D as point + 2 directions
# ════════════════════════════════════════════════════════════════════════════
class PlaneAsPointPlusDirections(ThreeDScene):
    def construct(self):
        self.camera.background_color = BG
        self.set_camera_orientation(phi=60 * DEGREES, theta=-50 * DEGREES)

        ax = ThreeDAxes(
            x_range=[-2, 5], y_range=[-2, 5], z_range=[-2, 5],
            x_length=5, y_length=5, z_length=5,
            axis_config={"color": FAINT},
        )

        # Particular solution point p = (4, 0, 2)
        p = np.array([4, 0, 2])
        p_dot = Dot3D(ax.c2p(*p), radius=0.08, color=YELLOW_A)

        # Direction vectors
        v1 = np.array([-2, 1, 0])
        v2 = np.array([-3, 0, 1])

        arr_v1 = Arrow3D(ax.c2p(*p), ax.c2p(*(p + v1)), color=BLUE_A)
        arr_v2 = Arrow3D(ax.c2p(*p), ax.c2p(*(p + v2)), color=RED_A)

        # Plane through p spanned by v1, v2
        plane = Surface(
            lambda u, v: ax.c2p(*(p + u * v1 + v * v2)),
            u_range=[-1.5, 1.5], v_range=[-1.5, 1.5],
            fill_color=GREEN_A, fill_opacity=0.2,
            stroke_color=GREEN_A, stroke_width=0.3,
            resolution=(6, 6),
        )

        self.play(Create(ax), run_time=1)
        self.play(FadeIn(p_dot, scale=2), run_time=0.8)
        self.wait(0.5)
        self.play(Create(arr_v1), run_time=1)
        self.wait(0.3)
        self.play(Create(arr_v2), run_time=1)
        self.wait(0.5)
        self.play(FadeIn(plane), run_time=1.5)
        self.begin_ambient_camera_rotation(rate=0.15)
        self.wait(4)
        self.stop_ambient_camera_rotation()
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 6.  Article 1.4 — Curve fitting row reduction
# ════════════════════════════════════════════════════════════════════════════
class CurveFittingReduction(Scene):
    def construct(self):
        self.camera.background_color = BG

        def mat_tex(entries):
            rows = [" & ".join(str(v) for v in row) for row in entries]
            tex = r"\left[\begin{array}{ccc|c}" + r"\\".join(rows) + r"\end{array}\right]"
            return MathTex(tex, font_size=34, color=LABEL_C)

        title = Text("Curve Fitting: Row Reduction", font_size=26, color=LABEL_C).to_edge(UP, buff=0.5)
        self.play(Write(title))

        steps = [
            ([[1,1,1,2],[4,2,1,3],[9,3,1,6]], "Augmented Matrix"),
            ([[1,1,1,2],[0,-2,-3,-5],[0,-6,-8,-12]], r"R_2 - 4R_1,\ R_3 - 9R_1"),
            ([[1,1,1,2],[0,1,"3/2","5/2"],[0,-6,-8,-12]], r"R_2 \div (-2)"),
            ([[1,1,1,2],[0,1,"3/2","5/2"],[0,0,1,3]], r"R_3 + 6R_2"),
            ([[1,0,0,1],[0,1,0,-2],[0,0,1,3]], "RREF"),
        ]

        prev_mat = None
        prev_label = None
        for i, (entries, label_text) in enumerate(steps):
            m = mat_tex(entries).move_to(ORIGIN)
            if i > 0 and i < len(steps) - 1:
                lab = MathTex(label_text, font_size=22, color=YELLOW_A)
            else:
                lab = Text(label_text, font_size=22, color=FAINT if i == 0 else GREEN_A)
            lab.next_to(m, DOWN, buff=0.3)
            if prev_mat is None:
                self.play(Write(m), FadeIn(lab), run_time=1.5)
            else:
                self.play(ReplacementTransform(prev_mat, m), FadeOut(prev_label), FadeIn(lab), run_time=1.2)
            self.wait(1)
            prev_mat = m
            prev_label = lab

        sol = MathTex(r"a=1,\ b=-2,\ c=3", font_size=30, color=GREEN_A).next_to(prev_mat, RIGHT, buff=0.4)
        eq = MathTex(r"y = x^2 - 2x + 3", font_size=30, color=YELLOW_A).next_to(sol, DOWN, buff=0.2)
        self.play(Write(sol), run_time=0.8)
        self.play(Write(eq), run_time=0.8)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 7.  Article 2.1 — Vector addition tip-to-tail
# ════════════════════════════════════════════════════════════════════════════
class VectorAdditionTipToTail(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1, 7, 1], y_range=[-1, 8, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True, "font_size": 22},
        ).shift(LEFT * 0.5)

        # Vectors: u = (3, 2), v = (1, 4)
        u_arr = Arrow(ax.c2p(0, 0), ax.c2p(3, 2), buff=0, color=BLUE_A, stroke_width=4)
        u_lab = MathTex(r"\mathbf{u}", font_size=28, color=BLUE_A).next_to(u_arr, DOWN, buff=0.1)

        v_arr = Arrow(ax.c2p(0, 0), ax.c2p(1, 4), buff=0, color=RED_A, stroke_width=4)
        v_lab = MathTex(r"\mathbf{v}", font_size=28, color=RED_A).next_to(v_arr, LEFT, buff=0.1)

        # Tip-to-tail
        v_shifted = Arrow(ax.c2p(3, 2), ax.c2p(4, 6), buff=0, color=RED_A, stroke_width=3, stroke_opacity=0.7)
        v_sh_lab = MathTex(r"\mathbf{v}", font_size=24, color=RED_A).next_to(v_shifted, RIGHT, buff=0.08)

        sum_arr = Arrow(ax.c2p(0, 0), ax.c2p(4, 6), buff=0, color=GREEN_A, stroke_width=5)
        sum_lab = MathTex(r"\mathbf{u}+\mathbf{v}", font_size=28, color=GREEN_A).next_to(sum_arr.get_end(), RIGHT, buff=0.15)

        # Parallelogram
        u_shifted = Arrow(ax.c2p(1, 4), ax.c2p(4, 6), buff=0, color=BLUE_A, stroke_width=2, stroke_opacity=0.4)
        para_lab = Text("Parallelogram\nRule", font_size=20, color=FAINT).to_corner(UR, buff=0.5)

        self.play(Create(ax), run_time=1)
        self.play(GrowArrow(u_arr), Write(u_lab), run_time=1)
        self.wait(0.3)
        self.play(GrowArrow(v_arr), Write(v_lab), run_time=1)
        self.wait(0.5)

        # Tip-to-tail
        self.play(GrowArrow(v_shifted), FadeIn(v_sh_lab), run_time=1)
        self.wait(0.3)
        self.play(GrowArrow(sum_arr), Write(sum_lab), run_time=1.2)
        self.wait(0.5)

        # Show parallelogram
        self.play(GrowArrow(u_shifted), FadeIn(para_lab), run_time=1)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 8.  Article 2.1 — Scalar multiplication animation
# ════════════════════════════════════════════════════════════════════════════
class ScalarMultiplication(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-5, 7, 1], y_range=[-5, 7, 1],
            x_length=8, y_length=8,
            axis_config={"color": FAINT, "include_numbers": True, "font_size": 20},
        )

        v = np.array([2, 1])
        scalars = [1, 2, 0.5, -1, -1.5]
        colors = [BLUE_A, GREEN_A, YELLOW_A, RED_A, RED_A]
        labels_text = ["1", "2", "0.5", "-1", "-1.5"]

        self.play(Create(ax), run_time=1)

        arr = Arrow(ax.c2p(0, 0), ax.c2p(*v), buff=0, color=BLUE_A, stroke_width=4)
        label = MathTex(r"1 \cdot \mathbf{v}", font_size=30, color=BLUE_A).next_to(arr.get_end(), UR, buff=0.1)
        self.play(GrowArrow(arr), Write(label), run_time=1)
        self.wait(0.8)

        for i, (s, c, lt) in enumerate(zip(scalars[1:], colors[1:], labels_text[1:])):
            new_end = s * v
            new_arr = Arrow(ax.c2p(0, 0), ax.c2p(*new_end), buff=0, color=c, stroke_width=4)
            new_label = MathTex(lt + r" \cdot \mathbf{v}", font_size=30, color=c)
            new_label.next_to(new_arr.get_end(), UR if s > 0 else DL, buff=0.1)
            self.play(ReplacementTransform(arr, new_arr), ReplacementTransform(label, new_label), run_time=1.2)
            self.wait(0.8)
            arr = new_arr
            label = new_label

        self.wait(1)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 9.  Article 2.2 — Row vs Column picture side-by-side
# ════════════════════════════════════════════════════════════════════════════
class RowVsColumnPicture(Scene):
    def construct(self):
        self.camera.background_color = BG

        # ── Left: Row Picture (lines) ──
        ax_l = Axes(
            x_range=[-1, 6, 1], y_range=[-1, 6, 1],
            x_length=5, y_length=5,
            axis_config={"color": FAINT, "include_numbers": True, "font_size": 18},
        ).shift(LEFT * 3.5)

        # 2x + 3y = 8 → y = (8-2x)/3
        row_line1 = ax_l.plot(lambda x: (8 - 2*x)/3, x_range=[-0.5, 5], color=BLUE_A, stroke_width=3)
        rl1_lab = MathTex(r"2x+3y=8", font_size=22, color=BLUE_A).next_to(ax_l.c2p(0.5, 2.5), LEFT, buff=0.1)
        # x - y = 1 → y = x - 1
        row_line2 = ax_l.plot(lambda x: x - 1, x_range=[-0.5, 5], color=RED_A, stroke_width=3)
        rl2_lab = MathTex(r"x-y=1", font_size=22, color=RED_A).next_to(ax_l.c2p(4.5, 3), RIGHT, buff=0.1)
        row_dot = Dot(ax_l.c2p(2.2, 1.2), radius=0.08, color=GREEN_A)

        row_title = Text("Row Picture", font_size=22, color=BLUE_A).next_to(ax_l, UP, buff=0.3)

        # ── Right: Column Picture (vectors) ──
        ax_r = Axes(
            x_range=[-2, 10, 2], y_range=[-2, 6, 1],
            x_length=5, y_length=5,
            axis_config={"color": FAINT, "include_numbers": True, "font_size": 18},
        ).shift(RIGHT * 3.5)

        # x*(2,1) + y*(3,-1) = (8,1)  →  x≈2.2, y≈1.2
        col1 = Arrow(ax_r.c2p(0, 0), ax_r.c2p(2, 1), buff=0, color=BLUE_A, stroke_width=3)
        c1_lab = MathTex(r"\mathbf{a}_1", font_size=22, color=BLUE_A).next_to(col1, DOWN, buff=0.05)
        col2 = Arrow(ax_r.c2p(0, 0), ax_r.c2p(3, -1), buff=0, color=RED_A, stroke_width=3)
        c2_lab = MathTex(r"\mathbf{a}_2", font_size=22, color=RED_A).next_to(col2, DOWN, buff=0.05)

        # Scaled and added
        target = Dot(ax_r.c2p(8, 1), radius=0.08, color=GREEN_A)
        t_lab = MathTex(r"\mathbf{b}", font_size=24, color=GREEN_A).next_to(target, UR, buff=0.08)

        col_title = Text("Column Picture", font_size=22, color=RED_A).next_to(ax_r, UP, buff=0.3)

        divider = DashedLine(UP * 3.5, DOWN * 3.5, color=FAINT, stroke_width=1)

        self.play(Write(row_title), Write(col_title), Create(divider), run_time=1)
        self.play(Create(ax_l), Create(ax_r), run_time=1)
        # Row picture
        self.play(Create(row_line1), FadeIn(rl1_lab), run_time=1)
        self.play(Create(row_line2), FadeIn(rl2_lab), run_time=1)
        self.play(FadeIn(row_dot, scale=2), run_time=0.8)
        self.wait(0.5)
        # Column picture
        self.play(GrowArrow(col1), FadeIn(c1_lab), run_time=1)
        self.play(GrowArrow(col2), FadeIn(c2_lab), run_time=1)
        self.play(FadeIn(target, scale=2), Write(t_lab), run_time=0.8)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 10. Article 2.2 — 3D Span progression (1→2→3 vectors)
# ════════════════════════════════════════════════════════════════════════════
class SpanProgression3D(ThreeDScene):
    def construct(self):
        self.camera.background_color = BG
        self.set_camera_orientation(phi=65 * DEGREES, theta=-45 * DEGREES)

        ax = ThreeDAxes(
            x_range=[-3, 3], y_range=[-3, 3], z_range=[-3, 3],
            x_length=5, y_length=5, z_length=5,
            axis_config={"color": FAINT},
        )

        v1 = np.array([2, 1, 0])
        v2 = np.array([0, 1, 1])
        v3 = np.array([1, 0, 2])

        arr1 = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v1), color=BLUE_A)
        arr2 = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v2), color=RED_A)
        arr3 = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v3), color=GREEN_A)

        # Line through origin along v1
        line = Line3D(ax.c2p(*(-2*v1)), ax.c2p(*(2*v1)), color=BLUE_A, stroke_opacity=0.4, stroke_width=2)

        # Plane spanned by v1, v2
        plane = Surface(
            lambda u, v: ax.c2p(*(u * v1 + v * v2)),
            u_range=[-1.5, 1.5], v_range=[-1.5, 1.5],
            fill_color=YELLOW_A, fill_opacity=0.15,
            stroke_color=YELLOW_A, stroke_width=0.3,
            resolution=(6, 6),
        )

        self.play(Create(ax), run_time=1)

        # 1 vector → line
        self.play(Create(arr1), run_time=1)
        self.play(Create(line), run_time=1)
        self.wait(1)

        # 2 vectors → plane
        self.play(Create(arr2), run_time=1)
        self.play(FadeIn(plane), FadeOut(line), run_time=1.5)
        self.wait(1)

        # 3 vectors → all of R3
        self.play(Create(arr3), run_time=1)
        self.wait(0.5)

        self.begin_ambient_camera_rotation(rate=0.15)
        self.wait(4)
        self.stop_ambient_camera_rotation()
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 11. Article 2.3 — 3D coplanar vs non-coplanar vectors
# ════════════════════════════════════════════════════════════════════════════
class CoplanarVsNonCoplanar(ThreeDScene):
    def construct(self):
        self.camera.background_color = BG
        self.set_camera_orientation(phi=65 * DEGREES, theta=-50 * DEGREES)

        ax = ThreeDAxes(
            x_range=[-3, 4], y_range=[-3, 4], z_range=[-2, 4],
            x_length=5, y_length=5, z_length=4,
            axis_config={"color": FAINT},
        )

        # Coplanar: v3 = v1 + v2 (all in xy-plane)
        v1c = np.array([2, 0, 0])
        v2c = np.array([1, 2, 0])
        v3c = np.array([3, 2, 0])  # = v1 + v2

        a1c = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v1c), color=BLUE_A)
        a2c = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v2c), color=RED_A)
        a3c = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v3c), color=YELLOW_A)

        plane_cop = Surface(
            lambda u, v: ax.c2p(*(u * v1c + v * v2c)),
            u_range=[-1, 2], v_range=[-1, 2],
            fill_color=FAINT, fill_opacity=0.15,
            stroke_width=0,
            resolution=(4, 4),
        )

        self.play(Create(ax), run_time=1)

        # Coplanar
        self.play(Create(a1c), Create(a2c), run_time=1)
        self.play(FadeIn(plane_cop), run_time=0.8)
        self.play(Create(a3c), run_time=1)
        self.wait(1)
        self.play(FadeOut(a1c), FadeOut(a2c), FadeOut(a3c), FadeOut(plane_cop), run_time=0.8)

        # Non-coplanar
        v1n = np.array([2, 0, 0])
        v2n = np.array([0, 2, 0])
        v3n = np.array([0, 0, 2])

        a1n = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v1n), color=BLUE_A)
        a2n = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v2n), color=RED_A)
        a3n = Arrow3D(ax.c2p(0,0,0), ax.c2p(*v3n), color=GREEN_A)

        self.play(Create(a1n), Create(a2n), Create(a3n), run_time=1.5)
        self.begin_ambient_camera_rotation(rate=0.15)
        self.wait(4)
        self.stop_ambient_camera_rotation()
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 12. Article 3.1 — Matrix-vector multiplication as linear combo of columns
# ════════════════════════════════════════════════════════════════════════════
class MatVecAsLinearCombo(Scene):
    def construct(self):
        self.camera.background_color = BG

        title = Text("Matrix × Vector = Linear Combination of Columns", font_size=24, color=LABEL_C).to_edge(UP, buff=0.4)
        self.play(Write(title), run_time=1)

        # Ax = 2*col1 + 3*col2
        eq = MathTex(
            r"\begin{bmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{bmatrix}",
            r"\begin{bmatrix} 2 \\ 3 \end{bmatrix}",
            r"=",
            r"2", r"\begin{bmatrix} 1 \\ 3 \\ 5 \end{bmatrix}",
            r"+",
            r"3", r"\begin{bmatrix} 2 \\ 4 \\ 6 \end{bmatrix}",
            r"=",
            r"\begin{bmatrix} 8 \\ 18 \\ 28 \end{bmatrix}",
            font_size=32,
        )
        eq[0].set_color(LABEL_C)
        eq[1].set_color(YELLOW_A)
        eq[3].set_color(YELLOW_A)
        eq[4].set_color(BLUE_A)
        eq[6].set_color(YELLOW_A)
        eq[7].set_color(RED_A)
        eq[9].set_color(GREEN_A)

        eq.move_to(ORIGIN)

        # Reveal step by step
        self.play(Write(eq[0]), Write(eq[1]), run_time=1.5)
        self.wait(0.5)
        self.play(Write(eq[2]), run_time=0.3)
        self.play(Write(eq[3]), Write(eq[4]), run_time=1)
        self.play(Write(eq[5]), run_time=0.3)
        self.play(Write(eq[6]), Write(eq[7]), run_time=1)
        self.wait(0.5)
        self.play(Write(eq[8]), Write(eq[9]), run_time=1)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 13. Article 3.2 — 2D transformations on grid
#     (Uses plain Scene + NumberPlane for fast rendering)
# ════════════════════════════════════════════════════════════════════════════
class TransformationsOnGrid(Scene):
    def construct(self):
        self.camera.background_color = BG

        transforms = [
            ("Scaling",          [[2, 0], [0, 1.5]],
             r"\begin{bmatrix} 2 & 0 \\ 0 & 1.5 \end{bmatrix}"),
            ("Rotation (45°)",   [[np.cos(np.pi/4), -np.sin(np.pi/4)],
                                  [np.sin(np.pi/4),  np.cos(np.pi/4)]],
             r"\begin{bmatrix} \cos 45° & -\sin 45° \\ \sin 45° & \cos 45° \end{bmatrix}"),
            ("Shear",            [[1, 1], [0, 1]],
             r"\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}"),
            ("Reflection (y=x)", [[0, 1], [1, 0]],
             r"\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}"),
        ]

        for name, mat_vals, mat_tex_str in transforms:
            # Fresh grid + basis vectors per transformation
            grid = NumberPlane(
                x_range=[-4, 4, 1], y_range=[-4, 4, 1],
                x_length=8, y_length=8,
                background_line_style={"stroke_color": BLUE_A, "stroke_opacity": 0.35, "stroke_width": 1},
                axis_config={"stroke_color": FAINT},
            )
            e1 = Arrow(ORIGIN, RIGHT, buff=0, color=RED_A, stroke_width=5)
            e2 = Arrow(ORIGIN, UP, buff=0, color=GREEN_A, stroke_width=5)
            movable = VGroup(grid, e1, e2)

            title = Text(name, font_size=28, color=LABEL_C).to_corner(UL, buff=0.3)
            mat_label = MathTex(mat_tex_str, font_size=22, color=YELLOW_A).next_to(title, DOWN, aligned_edge=LEFT)

            self.play(FadeIn(grid), GrowArrow(e1), GrowArrow(e2),
                      Write(title), Write(mat_label), run_time=1)

            # Apply transform
            matrix = np.array(mat_vals)
            self.play(movable.animate.apply_matrix(matrix), run_time=1.5)
            self.wait(1)

            # Fade out everything before next transform
            self.play(*[FadeOut(m) for m in self.mobjects], run_time=0.6)


# ════════════════════════════════════════════════════════════════════════════
# 14. Article 3.2 — Basis vectors → columns
# ════════════════════════════════════════════════════════════════════════════
class BasisVectorsToColumns(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1, 5, 1], y_range=[-1, 5, 1],
            x_length=6, y_length=6,
            axis_config={"color": FAINT, "include_numbers": True, "font_size": 22},
        ).shift(LEFT * 1)

        # Standard basis
        e1 = Arrow(ax.c2p(0, 0), ax.c2p(1, 0), buff=0, color=RED_A, stroke_width=4)
        e1_lab = MathTex(r"\mathbf{e}_1", font_size=26, color=RED_A).next_to(e1, DOWN, buff=0.08)
        e2 = Arrow(ax.c2p(0, 0), ax.c2p(0, 1), buff=0, color=GREEN_A, stroke_width=4)
        e2_lab = MathTex(r"\mathbf{e}_2", font_size=26, color=GREEN_A).next_to(e2, LEFT, buff=0.08)

        # Where they land after transformation: e1→(3,1), e2→(2,4)
        te1 = Arrow(ax.c2p(0, 0), ax.c2p(3, 1), buff=0, color=RED_A, stroke_width=4)
        te1_lab = MathTex(r"T(\mathbf{e}_1) = \begin{bmatrix} 3 \\ 1 \end{bmatrix}", font_size=22, color=RED_A).next_to(te1.get_end(), RIGHT, buff=0.08)
        te2 = Arrow(ax.c2p(0, 0), ax.c2p(2, 4), buff=0, color=GREEN_A, stroke_width=4)
        te2_lab = MathTex(r"T(\mathbf{e}_2) = \begin{bmatrix} 2 \\ 4 \end{bmatrix}", font_size=22, color=GREEN_A).next_to(te2.get_end(), LEFT, buff=0.08)

        mat = MathTex(
            r"A = \begin{bmatrix} 3 & 2 \\ 1 & 4 \end{bmatrix}",
            font_size=34, color=YELLOW_A,
        ).to_corner(UR, buff=0.5)
        col_text = Text("Columns = images of basis vectors", font_size=20, color=LABEL_C).next_to(mat, DOWN, buff=0.2)

        self.play(Create(ax), run_time=1)
        self.play(GrowArrow(e1), Write(e1_lab), GrowArrow(e2), Write(e2_lab), run_time=1.2)
        self.wait(1)

        # Transform
        self.play(
            ReplacementTransform(e1, te1),
            ReplacementTransform(e1_lab, te1_lab),
            ReplacementTransform(e2, te2),
            ReplacementTransform(e2_lab, te2_lab),
            run_time=2,
        )
        self.wait(1)
        self.play(Write(mat), FadeIn(col_text), run_time=1.5)
        self.wait(2)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)


# ════════════════════════════════════════════════════════════════════════════
# 15. Article 3.3 — Rotation matrix from unit circle
# ════════════════════════════════════════════════════════════════════════════
class RotationFromUnitCircle(Scene):
    def construct(self):
        self.camera.background_color = BG

        ax = Axes(
            x_range=[-1.8, 1.8, 1], y_range=[-1.8, 1.8, 1],
            x_length=6, y_length=6,
            axis_config={"color": FAINT, "include_numbers": True, "font_size": 22},
        ).shift(LEFT * 1.5)

        circle = Circle(radius=ax.c2p(1, 0)[0] - ax.c2p(0, 0)[0],
                        color=FAINT, stroke_width=1.5).move_to(ax.c2p(0, 0))

        angle = ValueTracker(0)

        # e1 before and after
        e1 = Arrow(ax.c2p(0, 0), ax.c2p(1, 0), buff=0, color=RED_A, stroke_width=4)
        e1_lab = MathTex(r"\mathbf{e}_1", font_size=24, color=RED_A).next_to(e1.get_end(), DR, buff=0.05)

        e2 = Arrow(ax.c2p(0, 0), ax.c2p(0, 1), buff=0, color=GREEN_A, stroke_width=4)
        e2_lab = MathTex(r"\mathbf{e}_2", font_size=24, color=GREEN_A).next_to(e2.get_end(), UL, buff=0.05)

        theta = 45 * DEGREES
        ct, st = np.cos(theta), np.sin(theta)

        te1 = Arrow(ax.c2p(0, 0), ax.c2p(ct, st), buff=0, color=RED_A, stroke_width=4, stroke_opacity=0.8)
        te1_lab = MathTex(
            r"(\cos\theta, \sin\theta)", font_size=20, color=RED_A
        ).next_to(te1.get_end(), UR, buff=0.08)

        te2 = Arrow(ax.c2p(0, 0), ax.c2p(-st, ct), buff=0, color=GREEN_A, stroke_width=4, stroke_opacity=0.8)
        te2_lab = MathTex(
            r"(-\sin\theta, \cos\theta)", font_size=20, color=GREEN_A
        ).next_to(te2.get_end(), UL, buff=0.08)

        # Angle arc
        arc = Arc(radius=0.5, start_angle=0, angle=theta,
                  color=YELLOW_A, stroke_width=2).move_to(ax.c2p(0, 0), aligned_edge=ORIGIN)
        theta_lab = MathTex(r"\theta", font_size=24, color=YELLOW_A).next_to(arc, RIGHT, buff=0.1)

        mat = MathTex(
            r"R_\theta = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}",
            font_size=30, color=YELLOW_A,
        ).to_corner(UR, buff=0.4)

        self.play(Create(ax), Create(circle), run_time=1.2)
        self.play(GrowArrow(e1), Write(e1_lab), GrowArrow(e2), Write(e2_lab), run_time=1)
        self.wait(0.5)

        # Rotate e1
        self.play(Create(arc), Write(theta_lab), run_time=0.8)
        self.play(
            ReplacementTransform(e1, te1), ReplacementTransform(e1_lab, te1_lab),
            run_time=1.5,
        )
        self.wait(0.5)
        # Rotate e2
        self.play(
            ReplacementTransform(e2, te2), ReplacementTransform(e2_lab, te2_lab),
            run_time=1.5,
        )
        self.wait(0.5)
        self.play(Write(mat), run_time=1.2)
        self.wait(2.5)
        self.play(*[FadeOut(m) for m in self.mobjects], run_time=1)
