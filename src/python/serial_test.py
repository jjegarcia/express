import serial
import time

def readLineCR(port,chars):
    rv=""
    while True:
        ch=ser.read(chars)
        rv +=ch
        if ch=='\r' or ch=='':
            return rv
        
if __name__== '__main__':
    ser=serial.Serial('/dev/ttyS0',9600,timeout=1)
    ser.flush()
    print ("Serial Test\n")
    chars=3
    counter=0
    #ser.write('Serial Test')
    ser.write('inital value %d\n'%(1))
    
    while 1:
        #x=readLineCR(ser,chars)
        x=ser.read()
        #time.sleep(1)
        print ("read:"+ x)
        ser.write('new value: %d\n'%(counter))
        counter +=1
        