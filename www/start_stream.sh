if [ ! -d /tmp/stream ]
then
    mkdir /tmp/stream/
fi

if pgrep raspistill > /dev/null
then
    echo "raspistill already running"
else
    sudo raspistill -w 300 -h 169 -q 5 -o /tmp/stream/pic.jpg -tl 100 -t 9999999 -th 0:0:0 -n > /dev/null 2>&1&
    echo "raspistill started"
fi

if pgrep mjpg_streamer > /dev/null
then
    echo "mjpg_streamer already running"
else
    sudo LD_LIBRARY_PATH=/opt/mjpg-streamer/ /opt/mjpg-streamer/mjpg_streamer -i "input_file.so -f /tmp/stream -n pic.jpg" -o "output_http.so -p 9000 -w /opt/mjpg-streamer/www" > /dev/null 2>&1&
    echo "mjpg_streamer started"
fi
