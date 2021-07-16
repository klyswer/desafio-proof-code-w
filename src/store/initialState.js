const initialState = {
  apis:{
    list:[],
    discount:[],
    listaCategorias:[    
      {id:1,title:'Juguetería',icon:'jugueteria.svg',active:false},
      {id:2,title:'Mundo Bebé',icon:'bebe.svg',active:false},
      {id:3,title:'Televisión',icon:'televisores.svg',active:true},
      {d:4,title:'VideoJuegos',icon:'tecno.svg',active:false},
      {d:5,title:'Telefonía',icon:'telefonia.svg',active:false},
      {d:6,title:'Computación',icon:'compu.svg',active:false},
      {d:7,title:'Refrigeración',icon:'refrigeracion.svg',active:false},
      {d:8,title:'Electrodomésticos',icon:'electrodomesticos.svg',active:false},
      {d:9,title:'Dormitorio',icon:'dormi.svg',active:false},
      {d:10,title:'Muebles',icon:'muebles.svg',active:false},
      {d:11,title:'Decohogar',icon:'deco.svg',active:false},
      {d:12,title:'Deporte',icon:'deportes.svg',active:false},
      {d:13,title:'Aire Libre',icon:'aire.svg',active:false},
      {d:14,title:'Automóvil',icon:'automoviles.svg',active:false},
      {d:15,title:'Cuidado',icon:'belleza.svg',active:false},
    ],

  },
  Cart:{
    showCart:false,
    listaProductoSelects: []
      // {id:1,src:"www.lider.cl/catalogo/images/catalogo_no_photo.jpg",nombre:"Televisión 54''",cantidad:1,precio:80000},
      // {id:2,src:"www.lider.cl/catalogo/images/catalogo_no_photo.jpg",nombre:"Microondas 120W",cantidad:1,precio:40000},
      // {id:3,src:"www.lider.cl/catalogo/images/catalogo_no_photo.jpg",nombre:"Horno Gas Premium",cantidad:1,precio:30000},
    // ],
  }

};

export default initialState;
