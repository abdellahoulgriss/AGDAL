
import os

output_dir = r"c:\Users\Abdellah\Desktop\PR\games\coloring\assets\images"
os.makedirs(output_dir, exist_ok=True)

svg_templates = [
    ("sun", '<circle cx="100" cy="100" r="50" stroke="black" stroke-width="3" fill="none" /> <path d="M100 20 L100 40 M100 160 L100 180 M20 100 L40 100 M160 100 L180 100 M45 45 L60 60 M140 140 L155 155 M45 155 L60 140 M140 60 L155 45" stroke="black" stroke-width="3" />'),
    ("moon", '<path d="M100 20 A60 60 0 1 0 100 180 A50 50 0 1 1 100 20" stroke="black" stroke-width="3" fill="none" />'),
    ("star", '<polygon points="100,20 125,80 190,80 140,120 155,180 100,145 45,180 60,120 10,80 75,80" stroke="black" stroke-width="3" fill="none" />'),
    ("flower", '<circle cx="100" cy="100" r="20" stroke="black" stroke-width="3" fill="none" /> <circle cx="100" cy="60" r="20" stroke="black" stroke-width="3" fill="none" /> <circle cx="140" cy="100" r="20" stroke="black" stroke-width="3" fill="none" /> <circle cx="100" cy="140" r="20" stroke="black" stroke-width="3" fill="none" /> <circle cx="60" cy="100" r="20" stroke="black" stroke-width="3" fill="none" /> <path d="M100 140 L100 200" stroke="black" stroke-width="4" />'),
    ("tree", '<rect x="85" y="140" width="30" height="60" stroke="black" stroke-width="3" fill="none" /> <circle cx="100" cy="100" r="50" stroke="black" stroke-width="3" fill="none" />'),
    ("apple", '<circle cx="90" cy="100" r="40" stroke="black" stroke-width="3" fill="none" /> <circle cx="110" cy="100" r="40" stroke="black" stroke-width="3" fill="none" /> <path d="M100 60 L100 40" stroke="black" stroke-width="4" />'),
    ("banana", '<path d="M50 150 Q100 200 150 150 Q120 120 50 150" stroke="black" stroke-width="3" fill="none" />'),
    ("car", '<rect x="40" y="100" width="120" height="40" stroke="black" stroke-width="3" fill="none" /> <path d="M60 100 L70 70 L130 70 L140 100" stroke="black" stroke-width="3" fill="none" /> <circle cx="60" cy="140" r="15" stroke="black" stroke-width="3" fill="none" /> <circle cx="140" cy="140" r="15" stroke="black" stroke-width="3" fill="none" />'),
    ("house", '<rect x="50" y="100" width="100" height="80" stroke="black" stroke-width="3" fill="none" /> <polygon points="50,100 100,50 150,100" stroke="black" stroke-width="3" fill="none" /> <rect x="90" y="140" width="20" height="40" stroke="black" stroke-width="3" fill="none" />'),
    ("boat", '<path d="M50 120 L150 120 L130 160 L70 160 Z" stroke="black" stroke-width="3" fill="none" /> <path d="M100 120 L100 40 L140 100 Z" stroke="black" stroke-width="3" fill="none" />'),
    ("butterfly", '<ellipse cx="100" cy="100" rx="10" ry="40" stroke="black" stroke-width="3" fill="none" /> <ellipse cx="70" cy="80" rx="20" ry="20" stroke="black" stroke-width="3" fill="none" /> <ellipse cx="130" cy="80" rx="20" ry="20" stroke="black" stroke-width="3" fill="none" /> <ellipse cx="70" cy="120" rx="15" ry="15" stroke="black" stroke-width="3" fill="none" /> <ellipse cx="130" cy="120" rx="15" ry="15" stroke="black" stroke-width="3" fill="none" />'),
    ("fish", '<ellipse cx="100" cy="100" rx="50" ry="30" stroke="black" stroke-width="3" fill="none" /> <polygon points="150,100 180,80 180,120" stroke="black" stroke-width="3" fill="none" /> <circle cx="70" cy="90" r="3" fill="black" />'),
    ("cat", '<circle cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="none" /> <polygon points="70,70 60,40 90,60" stroke="black" stroke-width="3" fill="none" /> <polygon points="130,70 140,40 110,60" stroke="black" stroke-width="3" fill="none" /> <circle cx="85" cy="90" r="3" fill="black" /> <circle cx="115" cy="90" r="3" fill="black" />'),
    ("dog", '<ellipse cx="100" cy="100" rx="40" ry="35" stroke="black" stroke-width="3" fill="none" /> <ellipse cx="60" cy="100" rx="10" ry="20" stroke="black" stroke-width="3" fill="none" /> <ellipse cx="140" cy="100" rx="10" ry="20" stroke="black" stroke-width="3" fill="none" /> <circle cx="90" cy="90" r="3" fill="black" /> <circle cx="110" cy="90" r="3" fill="black" />'),
    ("bear", '<circle cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="none" /> <circle cx="65" cy="70" r="10" stroke="black" stroke-width="3" fill="none" /> <circle cx="135" cy="70" r="10" stroke="black" stroke-width="3" fill="none" /> <circle cx="90" cy="90" r="3" fill="black" /> <circle cx="110" cy="90" r="3" fill="black" />'),
    ("heart", '<path d="M100 180 C40 120 40 60 100 80 C160 60 160 120 100 180" stroke="black" stroke-width="3" fill="none" />'),
    ("diamond", '<polygon points="100,40 160,100 100,160 40,100" stroke="black" stroke-width="3" fill="none" />'),
    ("cloud", '<path d="M60 100 A20 20 0 1 1 80 80 A30 30 0 1 1 130 80 A20 20 0 1 1 140 100 L60 100" stroke="black" stroke-width="3" fill="none" />'),
    ("umbrella", '<path d="M40 100 Q100 20 160 100" stroke="black" stroke-width="3" fill="none" /> <path d="M100 100 L100 160 Q100 180 80 180" stroke="black" stroke-width="3" fill="none" />'),
    ("ball", '<circle cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="none" /> <path d="M60 100 Q100 140 140 100" stroke="black" stroke-width="3" fill="none" />'),
    ("kite", '<polygon points="100,40 140,80 100,160 60,80" stroke="black" stroke-width="3" fill="none" /> <path d="M60 80 L140 80 M100 40 L100 160" stroke="black" stroke-width="3" />'),
    ("balloon", '<ellipse cx="100" cy="80" rx="30" ry="40" stroke="black" stroke-width="3" fill="none" /> <path d="M100 120 L100 160" stroke="black" stroke-width="3" />'),
    ("icecream", '<path d="M80 80 L100 160 L120 80" stroke="black" stroke-width="3" fill="none" /> <circle cx="100" cy="80" r="20" stroke="black" stroke-width="3" fill="none" />'),
    ("cupcake", '<path d="M70 100 L80 140 L120 140 L130 100 Z" stroke="black" stroke-width="3" fill="none" /> <path d="M70 100 Q100 60 130 100" stroke="black" stroke-width="3" fill="none" />'),
    ("pencil", '<rect x="90" y="60" width="20" height="80" stroke="black" stroke-width="3" fill="none" /> <polygon points="90,140 100,160 110,140" stroke="black" stroke-width="3" fill="none" />'),
    ("book", '<rect x="60" y="80" width="80" height="60" stroke="black" stroke-width="3" fill="none" /> <line x1="100" y1="80" x2="100" y2="140" stroke="black" stroke-width="3" />'),
    ("rocket", '<rect x="85" y="60" width="30" height="60" stroke="black" stroke-width="3" fill="none" /> <polygon points="85,60 100,30 115,60" stroke="black" stroke-width="3" fill="none" /> <polygon points="85,120 70,140 85,140" stroke="black" stroke-width="3" fill="none" /> <polygon points="115,120 130,140 115,140" stroke="black" stroke-width="3" fill="none" />'),
    ("robot", '<rect x="80" y="60" width="40" height="40" stroke="black" stroke-width="3" fill="none" /> <rect x="70" y="100" width="60" height="60" stroke="black" stroke-width="3" fill="none" /> <line x1="70" y1="120" x2="50" y2="140" stroke="black" stroke-width="3" /> <line x1="130" y1="120" x2="150" y2="140" stroke="black" stroke-width="3" />'),
    ("ghost", '<path d="M70 160 L70 80 Q100 40 130 80 L130 160 Q115 140 100 160 Q85 140 70 160" stroke="black" stroke-width="3" fill="none" /> <circle cx="90" cy="90" r="3" fill="black" /> <circle cx="110" cy="90" r="3" fill="black" />'),
    ("smiley", '<circle cx="100" cy="100" r="50" stroke="black" stroke-width="3" fill="none" /> <circle cx="85" cy="90" r="5" fill="black" /> <circle cx="115" cy="90" r="5" fill="black" /> <path d="M85 120 Q100 135 115 120" stroke="black" stroke-width="3" fill="none" />'),
]

for i, (name, content) in enumerate(svg_templates):
    svg_data = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">{content}</svg>'
    with open(os.path.join(output_dir, f"{i+1}.svg"), "w") as f:
        f.write(svg_data)

print("Generated 30 SVG files.")
