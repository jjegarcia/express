import serial
import time
def read_line(ser):
    exit_function=False
    outLine=""
    while exit_function==False:
        ser_read=ser.read()
        print("sl:%s"%ser_read)
        if valid_rx(ser_read):
            if ser=='\n':
                return outLine
            outLine +=str(ser)
def valid_rx (ft):
    if ft == '':
        return False
    else:
        return True
    
if __name__== '__main__':
    ser=serial.Serial('/dev/ttyS0',9600,timeout=3)
    ser.flush()
    print ("Serial Test\n")
    chars=1
    counter=0
    ser.write('%s\n'%(counter))

    while 1:
        #ser.flush()
        y= read_line(ser)
        #ser.readline().decode('utf-8').rstrip()
        print ("Serial Read:%s"%y)
        if check_valid_rx(y):
            #print("serial=%s"%y)
            z=int(y)
            counter +=1
            time.sleep(1)
            print ("read:%d" %(z))
            ser.write('%d\n'%(counter))
