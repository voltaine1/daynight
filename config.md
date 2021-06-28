#  build video

## build video package.
```bash
npm run build && rm -rf dist/* && cd dist/ && npm run build && rm day.jpg night.jpg && zip -r daynight.zip ./* && mv daynight.zip ../daynightVideo.zip && cd ..

```

## build image package.
```bash
npm run build && rm dist/* && cd dist/ && npm run build && rm day.mp4 night.mp4 && zip -r daynight.zip ./* && mv daynight.zip ../daynightImage.zip && cd .. 
``` 