if pgrep mjpg_streamer > /dev/null
then
    echo "scannerer already running"
else
    sudo ./wiringPi/freelss/src/freelss
    echo "scanner started"
fi


