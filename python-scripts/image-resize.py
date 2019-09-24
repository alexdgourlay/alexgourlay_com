from PIL import Image
import os
import imghdr

RES_DIR = "../alexgourlay_com/resources/"

# Height of optimised images.
height = 1000
# Quality of compression of images
quality = 90

# Prefix for marking optimised images.
namePrefix = "OPT"

# Function for printing number in readable byte format e.g. '1.2KiB'
# def sizeof_fmt(num, suffix='b'):
#     for unit in ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi']:
#         if abs(num) < 1024.0:
#             return "%3.1f%s%s" % (num, unit, suffix)
#         num /= 1024.0
#     return "%.1f%s%s" % (num, 'Yi', suffix)


def optimise_image(path, height, quality, namePrefix):

    im = Image.open(path)
    # print("Original: " + "{}, ".format(im.size)
    #  + sizeof_fmt(os.path.getsize(IN_PATH)))

    # Convert to RGB format if not already in that format.
    if not path.endswith(('.jpg', '.jpeg', '.JPG', '.JPEG')):
        im = im.convert("RGB")

    im_size = im.size
    im_ratio = im_size[1]/im_size[0]

    out = im.resize((height, round(im_ratio*height)), Image.ANTIALIAS)

    split_path = os.path.split(path)
    out_name = namePrefix + split_path[1]
    OUT_PATH = os.path.join(split_path[0], out_name)
    out.save(OUT_PATH, quality=quality)

    # im = Image.open(OUT_PATH)
   

def run():
    for root, dirs, files in os.walk(RES_DIR):
        for file in files:

            IN_PATH = os.path.join(root, file)

            if imghdr.what(IN_PATH) and file[:3] not in namePrefix:
                optimise_image(IN_PATH, height, quality, 'OPT_')
                print("Image Optimised: {}".format(file))


run()
