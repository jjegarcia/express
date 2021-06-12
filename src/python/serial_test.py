import serial
import time

def proccessLine(x):
        x +=1
        time.sleep(1)
        print ("read:%d" %(x))
        ser.write('%s'%(x))
    
if __name__== '__main__':
    ser=serial.Serial('/dev/ttyS0',9600,timeout=1)
    ser.flush()
    print ("Serial Test\n")
    chars=1
    counter=0
    ser.write('%s'%(counter))

    while 1:
        proccessLine(int(ser.readline()))
