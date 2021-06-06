import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plasbijoux-items',
  templateUrl: './plasbijoux-items.component.html',
  styleUrls: ['./plasbijoux-items.component.scss'],
})
export class PlasbijouxItemsComponent implements OnInit {
  productsItems = [
    {
      code: 1,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1']
    },
    {
      code: 2,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1']
    },
    {
      code: 3,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1']
    },
    {
      code: 4,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1','color-1']
    },
    {
      code: 5,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1']
    },
    {
      code: 6,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1','color-1','color-1']
    },
    {
      code: 7,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1']
    },
    {
      code: 8,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1']
    },
    {
      code: 9,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1']
    },
    {
      code: 10,
      name: 'produto',
      img: [
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
        '../../../assets/item1_1.jpeg',
      ],
      price: '0.5',
      tipo: 'brinco',
      forma: 'lua',
      cores: ['color-1'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getRandomImg(img: string[]) {
    //  const item = this.productsItems.find(i =>i.code === code);
    const min = Math.ceil(0);
    const max = Math.floor(img.length - 1);
    return img[Math.floor(Math.random() * (max - min + 1)) + min];
  }

  getDecimal(price:string){
  
    return Number(price).toFixed(2);
  }
}
