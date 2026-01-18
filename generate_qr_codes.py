import qrcode
from PIL import Image, ImageDraw, ImageFont

def create_gym_qr(gym_name, gym_url, filename):
    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=4,
    )
    qr.add_data(gym_url)
    qr.make(fit=True)
    
    # Create cyan gradient QR code
    qr_img = qr.make_image(fill_color="#06b6d4", back_color="white")
    
    # Create poster (8.5" x 11" at 300 DPI = 2550 x 3300)
    poster = Image.new('RGB', (2550, 3300), 'white')
    draw = ImageDraw.Draw(poster)
    
    # Add gradient background
    for y in range(3300):
        color_value = int(255 - (y / 3300) * 30)
        draw.rectangle([(0, y), (2550, y+1)], fill=(color_value, color_value, color_value))
    
    # Paste QR code in center
    qr_size = 1800
    qr_img = qr_img.resize((qr_size, qr_size), Image.LANCZOS)
    qr_position = ((2550 - qr_size) // 2, 600)
    poster.paste(qr_img, qr_position)
    
    # Add text (you'll need to install a font or use default)
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 120)
        subtitle_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 80)
        url_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 60)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        url_font = ImageFont.load_default()
    
    # Title
    title = "Find Your Workout Partner"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    draw.text(((2550 - title_width) // 2, 200), title, fill='#000000', font=title_font)
    
    # Gym name
    gym_bbox = draw.textbbox((0, 0), gym_name, font=subtitle_font)
    gym_width = gym_bbox[2] - gym_bbox[0]
    draw.text(((2550 - gym_width) // 2, 350), gym_name, fill='#06b6d4', font=subtitle_font)
    
    # Instructions
    instruction = "Scan to Join"
    inst_bbox = draw.textbbox((0, 0), instruction, font=subtitle_font)
    inst_width = inst_bbox[2] - inst_bbox[0]
    draw.text(((2550 - inst_width) // 2, 2500), instruction, fill='#000000', font=subtitle_font)
    
    # URL
    url_bbox = draw.textbbox((0, 0), gym_url, font=url_font)
    url_width = url_bbox[2] - url_bbox[0]
    draw.text(((2550 - url_width) // 2, 2700), gym_url, fill='#666666', font=url_font)
    
    # Save
    poster.save(filename, 'PNG', dpi=(300, 300))
    print(f"Created: {filename}")

# Generate QR codes for all 3 gyms
gyms = [
    ("MIDWEST METHOD", "https://dimer.app/gym/midwest-method", "qr_midwest_method.png"),
    ("LINK FITNESS", "https://dimer.app/gym/link-fitness", "qr_link_fitness.png"),
    ("ANYTIME FITNESS", "https://dimer.app/gym/anytime-fitness-platte-city", "qr_anytime_fitness.png"),
]

for gym_name, gym_url, filename in gyms:
    create_gym_qr(gym_name, gym_url, f"/home/claude/dimer-landing/{filename}")

print("\n✅ All QR codes generated!")
print("\nThese are print-ready 8.5\"x11\" posters at 300 DPI.")
print("Send these to your target gyms for display.")
