from PIL import Image

RES_DIR = "../alexgourlay_com/resources"

im = Image.open('Handy.PNG')

box = (100, 100, 400, 400)
region = im.crop(box)

out = im.point(lambda i: i * 20)

out.show()