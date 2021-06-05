#  build video
```bash
cd dist && npm run build && rm day.jpg night.jpg && zip -r daynight.zip ./* && mv daynight.zip ../daynightVideo.zip && cd ..
cd dist && npm run build && zip -r daynight.zip ./* && mv daynight.zip ../daynightImage.zip && cd .. 

``` 