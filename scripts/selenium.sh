#!/bin/bash

xvfb-run -a java \
    -Dwebdriver.chrome.driver=/usr/bin/chromedriver \
    -Dselenium.LOGGER.level=SEVERE \
    -jar /opt/selenium/selenium-server-standalone.jar
