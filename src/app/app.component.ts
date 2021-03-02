// app.component.ts
import { Component } from '@angular/core';

import { ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-image-uploader';

    imageChangedEvent: any = '';
    croppedImage: any = '';
    croppedThumbnail: any = '';

    loading = false;
    canvasRotation = 0;

    transform: ImageTransform = {};
    showCropper = false;

    fileChangeEvent(event: any): void {
        this.loading = true;
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        console.log(this.croppedImage);
    }
    imageLoaded(event: LoadedImage) {
        this.showCropper = true;
    }

    loadImageFailed() {
        // show message
    }

    rotateImage() {
        this.loading = true;
        setTimeout(() => {
          this.canvasRotation++;
          this.flipAfterRotate();
        });
    }

    private flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
          ...this.transform,
          flipH: flippedV,
          flipV: flippedH
        };
    }

}