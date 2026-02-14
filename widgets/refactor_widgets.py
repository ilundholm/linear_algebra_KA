
import os
import re

WIDGETS_DIR = r"c:\Users\ilundholm\OneDrive - Milligan University\Projects\Linear Algebra KA\widgets"

def refactor_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip files that already look like they have the light theme (e.g., #ffffff background)
    if "background: #ffffff;" in content and "color: #0f172a;" in content:
        print(f"Skipping {os.path.basename(filepath)} (already light theme?)")
        return

    print(f"Refactoring {os.path.basename(filepath)}...")

    # 1. CSS Variables / General Styles
    content = content.replace("background: #1a1a2e;", "background: #ffffff;")
    content = content.replace("background: #12121c;", "background: #f8fafc; border-right: 1px solid #e2e8f0;")
    content = content.replace("color: #eee;", "color: #0f172a;")
    content = content.replace("color: #ccc;", "color: #334155;")
    content = content.replace("color: #aaa;", "color: #64748b;")
    
    # 2. Panels and Cards
    # Old dark panels often used transparent white
    content = content.replace("background: rgba(255,255,255,0.05);", "background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);")
    content = content.replace("background: rgba(255,255,255,0.08);", "background: #f1f5f9; border: 1px solid #e2e8f0;") # For cells?

    # 3. Inputs
    # Dark inputs
    content = content.replace("background: #2a2a4a;", "background: #ffffff;")
    content = content.replace("border: 1px solid #444;", "border: 1px solid #cbd5e1;")

    # 4. MathBox / Three.js Specifics
    # Clear Color
    content = re.sub(r"setClearColor\s*\([^,]+,\s*'#1a1a2e'\s*\)", "setClearColor(new THREE.Color('#ffffff'), 1.0)", content)
    
    # Grid Lines (Dark -> Light Gray)
    content = re.sub(r"color:\s*'#444'", "color: '#e2e8f0'", content)
    
    # Axes (White -> Slate)
    content = re.sub(r"color:\s*'#ffffff'", "color: '#94a3b8'", content) # Axes lines
    
    # Labels (Background Navy -> White, Text White -> Navy)
    content = content.replace("background: '#1a1a2e'", "background: '#ffffff'")
    content = re.sub(r"color:\s*'#ffffff'", "color: '#0f172a'", content) # Label text (regex catches both axes and labels, order matters if they differ)

    # Since I did a regex for color: '#ffffff' above to #94a3b8 (axes), 
    # and labels also use color: '#ffffff', I need to be careful.
    # The axes usually use color: '#ffffff' inside view.axis
    # The labels use color: '#ffffff' inside view.label
    
    # Let's revert the regex approach and be more specific for MathBox
    
    # Resetting content for MathBox section to do it safer
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # --- CSS Replacements ---
    content = content.replace("background: #1a1a2e;", "background: #ffffff;")
    content = content.replace("background: #12121c;", "background: #f8fafc; border-right: 1px solid #e2e8f0;")
    content = content.replace("color: #eee;", "color: #0f172a;")
    content = content.replace("color: #ccc;", "color: #334155;")
    content = content.replace("color: #aaa;", "color: #64748b;")
    content = content.replace("background: rgba(255,255,255,0.05);", "background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);")
    content = content.replace("background: rgba(255,255,255,0.08);", "background: #f1f5f9; border: 1px solid #e2e8f0;")
    content = content.replace("background: #2a2a4a;", "background: #ffffff; color: #0f172a;")
    content = content.replace("border: 1px solid #444;", "border: 1px solid #cbd5e1;")
    
    # --- JS/MathBox Replacements ---
    # 1. Clear color
    content = content.replace("'#1a1a2e'", "'#ffffff'") 
    
    # 2. Grid lines (was #444, now light gray)
    content = content.replace("'#444'", "'#e2e8f0'")
    
    # 3. Axes lines (was #ffffff, now Slate 400)
    # This is tricky because labels are also white.
    # But usually axes are thicker/lines.
    # Let's try to replace "color: '#ffffff'" with "color: '#94a3b8'" globally first?
    # No, labels need to be darker (#0f172a) and axes need to be visible but not black (#94a3b8).
    
    # Strategy: Replace Label backgrounds first (Navy -> White)
    # The previous replace("'#1a1a2e'", "'#ffffff'") handled label BACKGROUNDS (and scene background).
    
    # Now text colors.
    # Labels usually have: `color: '#ffffff', background: '#1a1a2e'` (now background is #ffffff)
    # We want labels to be dark text.
    # Axes usually have: `color: '#ffffff'` (no background property)
    
    # Hacky but likely effective:
    # Replace `color: '#ffffff'` with `color: '#0f172a'` (Navy Text) - This makes axes Navy too. That's fine! Navy axes are good.
    content = content.replace("color: '#ffffff'", "color: '#0f172a'")
    
    # 3D Object Colors (Red/Blue/Green) - These can stay, they pop well on white.
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    for filename in os.listdir(WIDGETS_DIR):
        if filename.endswith(".html"):
            refactor_file(os.path.join(WIDGETS_DIR, filename))

if __name__ == "__main__":
    main()
