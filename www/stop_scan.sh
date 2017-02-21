if pgrep freelss
then
    sudo kill $(pgrep freelss) > /dev/null 2>&1
    echo "scanner stopped"
else
    echo "scanner not running"
fi

