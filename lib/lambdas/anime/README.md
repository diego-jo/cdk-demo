## λ **Lambda sample**
Anime character phrases according to the character's name passed via Lambda *event*

#
### To preper this lambda to be deployed in AWS follow the steps bellow:

- 1: NodeJs >= 14.x.x
- 2: **zip** binary or another compress software depending on your operational system

> If on Linux/OSX(Unix) with zip binary installed, just execute the *npm*

```
npm install && npm run build
```

After that, the file named *lambda-sample.zip* will be present into root directory and will be possible use it to upload in AWS Lambda console creation step.

> If on Windows, use the compress software of your choise to generate a .zip file after run _npm install_