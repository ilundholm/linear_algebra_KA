
import os
import re

WIDGETS_DIR = r"c:\Users\ilundholm\OneDrive - Milligan University\Projects\Linear Algebra KA\widgets"

def resize_file(filepath):
    print(f"Resizing {os.path.basename(filepath)}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Ensure body has full height
    if "body {" in content:
        # Check if height is already set
        if "min-height: 100vh" not in content and "height: 100%" not in content:
             content = content.replace("body {", "body { min-height: 100vh; display: flex; flex-direction: column;")
    
    # 2. Replace fixed container heights
    # Regex for .container { ... height: 500px; ... }
    # This is tricky with regex across lines.
    # New strategy: simpler line-by-line or specific replacements based on what grep showed.
    
    # Most MathBox widgets have this pattern:
    # .container {
    #   display: flex;
    #   width: 100%;
    #   height: 500px;
    # }
    content = re.sub(r"height:\s*500px;", "height: 100vh;", content)
    content = re.sub(r"height:\s*600px;", "height: 100vh;", content)
    content = re.sub(r"height:\s*400px;", "height: 100vh;", content)
    
    # Also need to ensure the #mathbox div grows
    # Usually: #mathbox { flex: 1; height: 100%; } -> this is fine if parent is 100vh.
    
    # Check for "min-height: 100vh;" overlap
    if "min-height: 100vh; min-height: 100vh;" in content:
        content = content.replace("min-height: 100vh; min-height: 100vh;", "min-height: 100vh;")

    # 3. Specific adjustments for row-reduction-steps (HTML-only widget)
    if "row-reduction-steps.html" in filepath:
        # It currently has: body { ... padding: 20px; }
        # And .container { max-width: 800px; margin: 0 auto; }
        # We want it to be centered vertically if small, or scroll if large.
        # body { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
        pass # The generic body replacement above roughly helps, binding it to min-height 100vh.

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    for filename in os.listdir(WIDGETS_DIR):
        if filename.endswith(".html"):
            resize_file(os.path.join(WIDGETS_DIR, filename))

if __name__ == "__main__":
    main()
