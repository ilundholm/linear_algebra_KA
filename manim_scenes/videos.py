"""
Manim video scenes for Linear Algebra KA.

Render:
    manim -ql --format mp4 manim_scenes/videos.py TwoLinesIntersection --media_dir ./media
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
# Article 1.1 — Two lines being drawn, zoom to intersection at (3,2)
# ════════════════════════════════════════════════════════════════════════════
class TwoLinesIntersection(Scene):
    """
    ~15s animation:
    1. Axes appear
    2. First line drawn with label
    3. Second line drawn with label
    4. Intersection dot pulses with label
    5. Brief pause, then fade out
    """

    def construct(self):
        self.camera.background_color = BG

        # ── Axes ──
        ax = Axes(
            x_range=[-1, 6, 1], y_range=[-1, 6, 1],
            x_length=7, y_length=7,
            axis_config={"color": FAINT, "include_numbers": True,
                         "font_size": 24, "include_ticks": True},
        ).shift(LEFT * 0.5)

        ax_labels = ax.get_axis_labels(
            x_label=MathTex("x", font_size=28, color=LABEL_C),
            y_label=MathTex("y", font_size=28, color=LABEL_C),
        )

        # ── Lines ──
        # x + y = 5  =>  y = 5 - x
        line1 = ax.plot(lambda x: 5 - x, x_range=[-0.5, 5.5], color=BLUE_A,
                        stroke_width=3)
        lab1 = MathTex("x + y = 5", font_size=32, color=BLUE_A).next_to(
            ax.c2p(0.5, 4.5), RIGHT, buff=0.15)

        # x - y = 1  =>  y = x - 1
        line2 = ax.plot(lambda x: x - 1, x_range=[-0.5, 5.5], color=RED_A,
                        stroke_width=3)
        lab2 = MathTex("x - y = 1", font_size=32, color=RED_A).next_to(
            ax.c2p(5, 3.5), RIGHT, buff=0.15)

        # ── Intersection ──
        dot = Dot(ax.c2p(3, 2), radius=0.12, color=GREEN_A)
        dot_label = MathTex("(3,\\,2)", font_size=34, color=GREEN_A).next_to(
            dot, UR, buff=0.15)

        solution_text = Text("Solution!", font_size=28, color=GREEN_A).next_to(
            dot_label, RIGHT, buff=0.3)

        # ── Animation sequence ──

        # 1. Axes appear
        self.play(Create(ax), Write(ax_labels), run_time=1.5)
        self.wait(0.3)

        # 2. Draw first line
        self.play(Create(line1), run_time=1.2)
        self.play(FadeIn(lab1), run_time=0.6)
        self.wait(0.5)

        # 3. Draw second line
        self.play(Create(line2), run_time=1.2)
        self.play(FadeIn(lab2), run_time=0.6)
        self.wait(0.5)

        # 4. Flash intersection point
        self.play(FadeIn(dot, scale=3), run_time=0.8)
        self.play(
            Flash(dot, color=GREEN_A, flash_radius=0.4, num_lines=12),
            Write(dot_label),
            run_time=1.0,
        )
        self.play(FadeIn(solution_text, shift=RIGHT * 0.3), run_time=0.6)

        # 5. Hold
        self.wait(2)

        # 6. Fade everything
        self.play(
            *[FadeOut(m) for m in self.mobjects],
            run_time=1.0,
        )
        self.wait(0.3)
