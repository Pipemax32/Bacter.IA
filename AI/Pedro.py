from cv2 import cv2
import numpy as np
kernel = np.ones((5, 5), np.uint8)
img = cv2.imread('Desktop/etiqueta.jpg',0)
img = cv2.medianBlur(img,5)
cimg = cv2.cvtColor(img,cv2.COLOR_GRAY2BGR)
circles = cv2.HoughCircles(img,cv2.HOUGH_GRADIENT,1,120, param1=100,param2=100,minRadius=0,maxRadius=0)
circles = np.uint32(np.around(circles))
for i in circles[0,:]:
    cv2.circle(cimg,(i[0],i[1]),i[2],(0,255,0),3)
thresh = 242
for i, row in enumerate(cimg):
    verde = False
    adentro = False
    pos1 = 0
    pos2 = 0
    for j, pixel in enumerate(row): 
        if verde == False:
            if adentro == False:
                if ((int(pixel[0])) == 0) and ((int(pixel[2])) == 0) and ((int(pixel[1])) == 255):
                    adentro = True
                    verde = True
                cimg[i][j] = [0, 255, 0]
            elif ((int(pixel[1])) == 255) and ((int(pixel[0])) == 0) and ((int(pixel[2])) == 0):
                    adentro = False
                    verde = True
            elif np.all(pixel > thresh) or np.all(pixel < 50):
                if pos1 == 0:
                    if np.any(cimg[i][j-1] < thresh-30) or (cimg[i][j-1][1] == 255 and cimg[i][j-1][0] == 0):
                        pos1 = j
                elif np.any(cimg[i][j+1] < thresh-5)and np.any(cimg[i][j-1] > thresh-5):
                    pos2 = j
        elif ((int(pixel[1])) != 255):
                verde = False
                cimg[i][j] = [0, 255, 0]
    if adentro == True:
        for j, pixel in enumerate(row):
            cimg[i][j] = [0, 255, 0]
    for j, pixel in enumerate(row):
        if j <= pos2 and j >= pos1:
            cimg[i][j] = [0, 255, 0]
cv2.imshow('detected circles',cimg)
cv2.imwrite("Desktop/placapetri.png", cimg)
cv2.waitKey(0)
cv2.destroyAllWindows()