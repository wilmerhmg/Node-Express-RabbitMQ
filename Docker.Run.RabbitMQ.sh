#!/bin/bash

echo "--------------DETENIENDO--------------"
docker stop rabbitmq-test

echo ""
echo "--------------ELIMINANDO--------------"
docker rm rabbitmq-test

echo ""
echo "--------------INICIANDO---------------"

docker run --name rabbitmq-test \
           -p 5672:5672 \
           -p 15672:15672 \
           -e RABBITMQ_DEFAULT_USER=admin \
           -e RABBITMQ_DEFAULT_PASS="El Profesor Super O" \
           -d rabbitmq:3.6-management-alpine
