from PIL import Image
import os
import imghdr

RES_DIR = "../alexgourlay_com/resources/"

for root, dirs, files in os.walk(RES_DIR):
    for file in files:
        if imghdr.what(os.path.join(root, file)):
            print("Image Found: {}".format(file))

# Asigned height of optimised images.
height = 1000

# Function for printing number in readable byte format e.g. '1.2KiB'
def sizeof_fmt(num, suffix='b'):
    for unit in ['','Ki','Mi','Gi','Ti','Pi','Ei','Zi']:
        if abs(num) < 1024.0:
            return "%3.1f%s%s" % (num, unit, suffix)
        num /= 1024.0
    return "%.1f%s%s" % (num, 'Yi', suffix)

def run():
    IN_PATH = './murzuq.jpg'

    im = Image.open(IN_PATH)

    # print("Original: " + "{}, ".format(im.size) + sizeof_fmt(os.path.getsize(IN_PATH)))

    # Convert to RGB format if not already in that format.
    if not IN_PATH.endswith(('.jpg', '.jpeg', '.JPG', '.JPEG')):
        im = im.convert("RGB")

    im_size = im.size
    im_ratio = im_size[1]/im_size[0]

    out = im.resize((height, round(im_ratio*height)), Image.ANTIALIAS)

    OUT_PATH = "murzuq_opt.jpg"
    out.save(OUT_PATH, quality= 90)

    im = Image.open(OUT_PATH)
    # print("Optimised: " + "{}, ".format(im.size) + sizeof_fmt(os.path.getsize(OUT_PATH)))

