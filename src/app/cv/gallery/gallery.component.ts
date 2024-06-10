import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  public images: any[] = [];




  ngOnInit(): void {
    this.images = [
      { src: this.Picture, alt: '', text: this.PictureText },
      
      // Tilføj flere billeder efter behov
    ];
 
    
  }

  @Input() public Picture?: string 
  @Input() public PictureText? : string


  modalVisible = false;
  currentImage: { src: string, alt: string, text: string } | null = null;

  openModal(image: { src: string, alt: string, text: string }) {
    this.currentImage = image;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }
}
