const moviesMock = [
  {
    id: "9af5e362-78f4-4817-9617-a30fb8ddbca1",
    title: "Musikanten",
    year: 2003,
    cover: "http://dummyimage.com/127x225.bmp/cc0000/ffffff",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    duration: 1980,
    contentRating: "NC-17",
    source:
      "https://youtu.be/commodo/placerat/praesent/blandit/nam/nulla.png?nibh=ut&in=tellus&quis=nulla&justo=ut&maecenas=erat&rhoncus=id&aliquam=mauris&lacus=vulputate&morbi=elementum&quis=nullam&tortor=varius&id=nulla&nulla=facilisi&ultrices=cras&aliquet=non&maecenas=velit&leo=nec&odio=nisi&condimentum=vulputate&id=nonummy&luctus=maecenas&nec=tincidunt&molestie=lacus&sed=at&justo=velit&pellentesque=vivamus&viverra=vel&pede=nulla&ac=eget&diam=eros&cras=elementum&pellentesque=pellentesque&volutpat=quisque&dui=porta&maecenas=volutpat&tristique=erat&est=quisque&et=erat&tempus=eros&semper=viverra&est=eget&quam=congue&pharetra=eget&magna=semper&ac=rutrum&consequat=nulla&metus=nunc&sapien=purus&ut=phasellus&nunc=in&vestibulum=felis&ante=donec&ipsum=semper&primis=sapien&in=a&faucibus=libero&orci=nam&luctus=dui&et=proin&ultrices=leo&posuere=odio&cubilia=porttitor&curae=id&mauris=consequat&viverra=in&diam=consequat&vitae=ut&quam=nulla",
    tags: ["Animation|Drama", "Comedy|Romance"],
  },
  {
    id: "70eb7c09-2c83-4b38-ab40-e0cb2bac33c3",
    title: "Owning Mahowny",
    year: 1998,
    cover: "http://dummyimage.com/220x186.jpg/dddddd/000000",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    duration: 2065,
    contentRating: "R",
    source:
      "http://buzzfeed.com/rhoncus/aliquet/pulvinar/sed/nisl/nunc.jsp?montes=mauris&nascetur=morbi&ridiculus=non&mus=lectus&etiam=aliquam&vel=sit&augue=amet&vestibulum=diam&rutrum=in&rutrum=magna&neque=bibendum&aenean=imperdiet&auctor=nullam&gravida=orci&sem=pede&praesent=venenatis&id=non&massa=sodales&id=sed&nisl=tincidunt&venenatis=eu&lacinia=felis&aenean=fusce&sit=posuere&amet=felis&justo=sed&morbi=lacus&ut=morbi&odio=sem&cras=mauris&mi=laoreet&pede=ut&malesuada=rhoncus&in=aliquet&imperdiet=pulvinar&et=sed&commodo=nisl&vulputate=nunc&justo=rhoncus&in=dui&blandit=vel&ultrices=sem&enim=sed&lorem=sagittis&ipsum=nam&dolor=congue&sit=risus&amet=semper&consectetuer=porta&adipiscing=volutpat&elit=quam&proin=pede&interdum=lobortis&mauris=ligula&non=sit&ligula=amet&pellentesque=eleifend&ultrices=pede&phasellus=libero&id=quis&sapien=orci&in=nullam&sapien=molestie&iaculis=nibh&congue=in&vivamus=lectus&metus=pellentesque&arcu=at&adipiscing=nulla&molestie=suspendisse&hendrerit=potenti&at=cras&vulputate=in&vitae=purus&nisl=eu&aenean=magna&lectus=vulputate&pellentesque=luctus&eget=cum&nunc=sociis&donec=natoque&quis=penatibus&orci=et&eget=magnis",
    tags: ["Comedy|Mystery|Thriller", "Comedy", "Horror", "Sci-Fi", "Comedy"],
  },
  {
    id: "83d6bffc-013e-4862-9edf-6b8412df0ccf",
    title: "Act in Question, The (Acto en cuestión, El)",
    year: 1998,
    cover: "http://dummyimage.com/142x112.jpg/5fa2dd/ffffff",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    duration: 1977,
    contentRating: "R",
    source:
      "https://homestead.com/semper/rutrum/nulla/nunc.aspx?magna=in&vestibulum=faucibus&aliquet=orci&ultrices=luctus&erat=et&tortor=ultrices&sollicitudin=posuere&mi=cubilia&sit=curae&amet=mauris&lobortis=viverra&sapien=diam&sapien=vitae&non=quam&mi=suspendisse&integer=potenti&ac=nullam&neque=porttitor&duis=lacus&bibendum=at&morbi=turpis&non=donec&quam=posuere&nec=metus&dui=vitae&luctus=ipsum&rutrum=aliquam&nulla=non&tellus=mauris&in=morbi&sagittis=non&dui=lectus&vel=aliquam&nisl=sit&duis=amet&ac=diam&nibh=in&fusce=magna&lacus=bibendum&purus=imperdiet&aliquet=nullam&at=orci&feugiat=pede&non=venenatis&pretium=non&quis=sodales",
    tags: [
      "Comedy|Horror|Thriller",
      "Comedy|Drama|Romance",
      "Animation|Children|Drama|Fantasy|Musical",
    ],
  },
  {
    id: "3c78fe21-9a39-4d99-9eb9-d2897c392c33",
    title: "Young One, The",
    year: 1994,
    cover: "http://dummyimage.com/185x124.bmp/cc0000/ffffff",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    duration: 1939,
    contentRating: "PG-13",
    source:
      "https://ucoz.com/vestibulum.jpg?adipiscing=id&molestie=consequat&hendrerit=in&at=consequat&vulputate=ut&vitae=nulla&nisl=sed&aenean=accumsan&lectus=felis&pellentesque=ut",
    tags: ["Documentary", "Animation|Fantasy"],
  },
  {
    id: "8f64dfad-bd74-4915-90da-8b09df8a63f3",
    title: "Dead Man and Being Happy, The (El muerto y ser feliz)",
    year: 2009,
    cover: "http://dummyimage.com/193x207.png/dddddd/000000",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    duration: 2000,
    contentRating: "NC-17",
    source:
      "https://jiathis.com/a/odio/in/hac/habitasse/platea.json?turpis=sapien&a=iaculis&pede=congue&posuere=vivamus&nonummy=metus&integer=arcu&non=adipiscing&velit=molestie&donec=hendrerit&diam=at&neque=vulputate&vestibulum=vitae&eget=nisl&vulputate=aenean&ut=lectus&ultrices=pellentesque&vel=eget&augue=nunc&vestibulum=donec",
    tags: [
      "Drama|Horror",
      "Adventure|Animation|Children|Comedy",
      "Crime|Drama|Thriller",
      "Comedy|Drama",
    ],
  },
  {
    id: "d70d21ea-0e28-4397-82c2-1c4dca778f2d",
    title: "Carlito's Way",
    year: 1997,
    cover: "http://dummyimage.com/220x166.png/ff4444/ffffff",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    duration: 1916,
    contentRating: "NC-17",
    source:
      "http://goo.gl/hac/habitasse/platea/dictumst/morbi/vestibulum.png?primis=a&in=feugiat&faucibus=et&orci=eros&luctus=vestibulum&et=ac&ultrices=est&posuere=lacinia&cubilia=nisi&curae=venenatis&mauris=tristique&viverra=fusce&diam=congue&vitae=diam&quam=id&suspendisse=ornare&potenti=imperdiet&nullam=sapien&porttitor=urna&lacus=pretium&at=nisl&turpis=ut&donec=volutpat&posuere=sapien&metus=arcu",
    tags: [
      "Drama|Mystery|Thriller",
      "Crime|Film-Noir",
      "Fantasy|Musical|Romance",
    ],
  },
  {
    id: "1527230b-e430-49f7-912a-5bb27dde623f",
    title: "Elephant White",
    year: 1999,
    cover: "http://dummyimage.com/150x153.png/ff4444/ffffff",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    duration: 2044,
    contentRating: "PG-13",
    source:
      "http://samsung.com/scelerisque/quam/turpis/adipiscing.jsp?nullam=est&orci=et&pede=tempus&venenatis=semper&non=est&sodales=quam&sed=pharetra&tincidunt=magna&eu=ac&felis=consequat&fusce=metus&posuere=sapien&felis=ut&sed=nunc&lacus=vestibulum&morbi=ante&sem=ipsum&mauris=primis&laoreet=in&ut=faucibus&rhoncus=orci&aliquet=luctus&pulvinar=et&sed=ultrices&nisl=posuere&nunc=cubilia&rhoncus=curae&dui=mauris&vel=viverra&sem=diam&sed=vitae&sagittis=quam&nam=suspendisse&congue=potenti&risus=nullam&semper=porttitor&porta=lacus&volutpat=at&quam=turpis&pede=donec&lobortis=posuere&ligula=metus&sit=vitae&amet=ipsum&eleifend=aliquam&pede=non&libero=mauris&quis=morbi&orci=non&nullam=lectus&molestie=aliquam&nibh=sit&in=amet&lectus=diam&pellentesque=in&at=magna&nulla=bibendum&suspendisse=imperdiet&potenti=nullam&cras=orci&in=pede&purus=venenatis&eu=non&magna=sodales",
    tags: [
      "Comedy",
      "Drama|Musical|Romance",
      "Romance|Thriller",
      "Comedy|Drama",
      "Comedy|Romance",
    ],
  },
  {
    id: "d65be7ea-3d75-4f82-bfe8-c22bf35fd53f",
    title: "Roommates",
    year: 1998,
    cover: "http://dummyimage.com/141x248.bmp/ff4444/ffffff",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    duration: 2058,
    contentRating: "G",
    source:
      "https://163.com/vel/dapibus/at.png?non=dui&ligula=proin&pellentesque=leo&ultrices=odio&phasellus=porttitor&id=id&sapien=consequat&in=in&sapien=consequat&iaculis=ut&congue=nulla&vivamus=sed&metus=accumsan&arcu=felis&adipiscing=ut&molestie=at&hendrerit=dolor&at=quis&vulputate=odio&vitae=consequat&nisl=varius&aenean=integer&lectus=ac&pellentesque=leo&eget=pellentesque&nunc=ultrices&donec=mattis&quis=odio&orci=donec&eget=vitae&orci=nisi&vehicula=nam&condimentum=ultrices&curabitur=libero&in=non&libero=mattis&ut=pulvinar&massa=nulla&volutpat=pede&convallis=ullamcorper&morbi=augue&odio=a&odio=suscipit&elementum=nulla&eu=elit&interdum=ac&eu=nulla&tincidunt=sed&in=vel&leo=enim&maecenas=sit&pulvinar=amet&lobortis=nunc&est=viverra&phasellus=dapibus&sit=nulla&amet=suscipit&erat=ligula&nulla=in&tempus=lacus&vivamus=curabitur&in=at&felis=ipsum&eu=ac&sapien=tellus&cursus=semper&vestibulum=interdum&proin=mauris&eu=ullamcorper&mi=purus&nulla=sit",
    tags: ["Drama", "Western"],
  },
  {
    id: "d08b2d1f-b376-41a0-93c4-ffdd11852712",
    title: "Your Friend the Rat",
    year: 2012,
    cover: "http://dummyimage.com/223x241.jpg/dddddd/000000",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    duration: 1928,
    contentRating: "PG",
    source:
      "https://psu.edu/risus/semper/porta/volutpat.jpg?non=nunc&interdum=commodo&in=placerat&ante=praesent&vestibulum=blandit&ante=nam&ipsum=nulla&primis=integer&in=pede&faucibus=justo&orci=lacinia&luctus=eget&et=tincidunt&ultrices=eget&posuere=tempus&cubilia=vel&curae=pede&duis=morbi&faucibus=porttitor&accumsan=lorem&odio=id&curabitur=ligula&convallis=suspendisse&duis=ornare&consequat=consequat&dui=lectus&nec=in&nisi=est&volutpat=risus&eleifend=auctor&donec=sed&ut=tristique&dolor=in&morbi=tempus&vel=sit&lectus=amet&in=sem&quam=fusce&fringilla=consequat&rhoncus=nulla&mauris=nisl&enim=nunc&leo=nisl&rhoncus=duis&sed=bibendum&vestibulum=felis&sit=sed&amet=interdum&cursus=venenatis&id=turpis&turpis=enim&integer=blandit&aliquet=mi&massa=in&id=porttitor&lobortis=pede&convallis=justo&tortor=eu&risus=massa&dapibus=donec&augue=dapibus",
    tags: ["Drama|Romance", "Action|Thriller", "Thriller"],
  },
  {
    id: "0eb987f7-c91b-4943-a9c9-6e626b0b91de",
    title: "Damnation Alley",
    year: 1998,
    cover: "http://dummyimage.com/241x235.jpg/dddddd/000000",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    duration: 1989,
    contentRating: "NC-17",
    source:
      "https://home.pl/ac.aspx?aliquam=nulla&sit=suspendisse&amet=potenti&diam=cras&in=in&magna=purus&bibendum=eu&imperdiet=magna&nullam=vulputate&orci=luctus&pede=cum&venenatis=sociis&non=natoque&sodales=penatibus&sed=et&tincidunt=magnis&eu=dis&felis=parturient&fusce=montes&posuere=nascetur&felis=ridiculus&sed=mus&lacus=vivamus&morbi=vestibulum&sem=sagittis&mauris=sapien&laoreet=cum&ut=sociis&rhoncus=natoque&aliquet=penatibus&pulvinar=et&sed=magnis&nisl=dis&nunc=parturient&rhoncus=montes&dui=nascetur&vel=ridiculus&sem=mus&sed=etiam&sagittis=vel&nam=augue&congue=vestibulum&risus=rutrum&semper=rutrum&porta=neque&volutpat=aenean&quam=auctor",
    tags: ["Comedy|Drama|Romance", "Action|Animation|Comedy"],
  },
  {
    id: "a6a922e1-8840-461a-811a-5c6193eb8a1a",
    title: "Father of My Children, The (Le père de mes enfants)",
    year: 2006,
    cover: "http://dummyimage.com/240x147.bmp/dddddd/000000",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    duration: 1992,
    contentRating: "NC-17",
    source:
      "http://mozilla.com/lobortis/ligula/sit/amet/eleifend.xml?ultrices=nulla&phasellus=justo&id=aliquam&sapien=quis&in=turpis&sapien=eget&iaculis=elit&congue=sodales&vivamus=scelerisque&metus=mauris&arcu=sit&adipiscing=amet&molestie=eros&hendrerit=suspendisse&at=accumsan&vulputate=tortor&vitae=quis&nisl=turpis&aenean=sed&lectus=ante&pellentesque=vivamus&eget=tortor&nunc=duis&donec=mattis&quis=egestas&orci=metus&eget=aenean&orci=fermentum&vehicula=donec&condimentum=ut&curabitur=mauris&in=eget&libero=massa&ut=tempor&massa=convallis&volutpat=nulla&convallis=neque&morbi=libero&odio=convallis&odio=eget&elementum=eleifend&eu=luctus",
    tags: [
      "Documentary",
      "Children|Comedy",
      "Comedy",
      "Comedy|Romance",
      "Documentary",
    ],
  },
  {
    id: "a61c21ca-1733-4ac0-a626-79520394b89a",
    title: "Last Seven, The",
    year: 2007,
    cover: "http://dummyimage.com/174x196.png/cc0000/ffffff",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    duration: 2064,
    contentRating: "G",
    source:
      "https://usnews.com/id/nulla/ultrices.jpg?luctus=ut&cum=massa&sociis=quis&natoque=augue&penatibus=luctus&et=tincidunt&magnis=nulla&dis=mollis&parturient=molestie&montes=lorem&nascetur=quisque&ridiculus=ut&mus=erat&vivamus=curabitur&vestibulum=gravida&sagittis=nisi&sapien=at&cum=nibh&sociis=in&natoque=hac&penatibus=habitasse&et=platea&magnis=dictumst&dis=aliquam&parturient=augue&montes=quam&nascetur=sollicitudin&ridiculus=vitae&mus=consectetuer&etiam=eget&vel=rutrum&augue=at&vestibulum=lorem&rutrum=integer&rutrum=tincidunt&neque=ante&aenean=vel&auctor=ipsum&gravida=praesent&sem=blandit&praesent=lacinia&id=erat&massa=vestibulum&id=sed&nisl=magna&venenatis=at&lacinia=nunc&aenean=commodo&sit=placerat&amet=praesent&justo=blandit&morbi=nam&ut=nulla&odio=integer&cras=pede&mi=justo&pede=lacinia&malesuada=eget&in=tincidunt&imperdiet=eget&et=tempus&commodo=vel&vulputate=pede&justo=morbi&in=porttitor&blandit=lorem&ultrices=id&enim=ligula&lorem=suspendisse&ipsum=ornare&dolor=consequat&sit=lectus&amet=in&consectetuer=est&adipiscing=risus&elit=auctor&proin=sed&interdum=tristique&mauris=in&non=tempus&ligula=sit&pellentesque=amet&ultrices=sem&phasellus=fusce&id=consequat&sapien=nulla&in=nisl&sapien=nunc&iaculis=nisl&congue=duis&vivamus=bibendum&metus=felis&arcu=sed&adipiscing=interdum&molestie=venenatis&hendrerit=turpis&at=enim",
    tags: ["Drama", "Comedy"],
  },
  {
    id: "1e6a7a2d-3506-4294-b104-3f636401b3d4",
    title: "Smash His Camera",
    year: 1996,
    cover: "http://dummyimage.com/238x146.bmp/ff4444/ffffff",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    duration: 2004,
    contentRating: "NC-17",
    source:
      "https://ameblo.jp/suspendisse/ornare.aspx?cras=semper&pellentesque=est&volutpat=quam&dui=pharetra&maecenas=magna&tristique=ac&est=consequat&et=metus&tempus=sapien&semper=ut&est=nunc&quam=vestibulum&pharetra=ante&magna=ipsum&ac=primis&consequat=in&metus=faucibus&sapien=orci&ut=luctus&nunc=et",
    tags: ["Drama", "Comedy|Crime|Mystery", "Action"],
  },
  {
    id: "7ebde2d0-8c47-4a09-89e6-d8da6dfaff2c",
    title: "Treasure of the Four Crowns",
    year: 2012,
    cover: "http://dummyimage.com/165x151.bmp/dddddd/000000",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    duration: 2040,
    contentRating: "PG-13",
    source:
      "https://addtoany.com/vel/est/donec/odio.xml?nulla=ac&nisl=neque&nunc=duis&nisl=bibendum&duis=morbi&bibendum=non&felis=quam",
    tags: ["Action|Crime|Thriller"],
  },
  {
    id: "5c61beb4-c885-4b83-9f81-4632a4f10514",
    title: "Witness",
    year: 2008,
    cover: "http://dummyimage.com/121x201.bmp/5fa2dd/ffffff",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    duration: 2009,
    contentRating: "R",
    source:
      "https://quantcast.com/nulla/dapibus/dolor/vel.js?tempus=magnis&semper=dis&est=parturient&quam=montes&pharetra=nascetur&magna=ridiculus&ac=mus&consequat=vivamus&metus=vestibulum&sapien=sagittis&ut=sapien&nunc=cum&vestibulum=sociis&ante=natoque&ipsum=penatibus&primis=et&in=magnis&faucibus=dis&orci=parturient&luctus=montes&et=nascetur&ultrices=ridiculus&posuere=mus&cubilia=etiam&curae=vel&mauris=augue&viverra=vestibulum&diam=rutrum&vitae=rutrum&quam=neque&suspendisse=aenean&potenti=auctor&nullam=gravida&porttitor=sem&lacus=praesent&at=id&turpis=massa&donec=id&posuere=nisl&metus=venenatis&vitae=lacinia&ipsum=aenean&aliquam=sit&non=amet&mauris=justo&morbi=morbi&non=ut&lectus=odio&aliquam=cras&sit=mi&amet=pede&diam=malesuada&in=in&magna=imperdiet&bibendum=et&imperdiet=commodo&nullam=vulputate&orci=justo&pede=in&venenatis=blandit&non=ultrices&sodales=enim&sed=lorem&tincidunt=ipsum&eu=dolor&felis=sit&fusce=amet&posuere=consectetuer&felis=adipiscing&sed=elit",
    tags: ["Drama", "Action|War", "Comedy", "Comedy|Fantasy|Sci-Fi", "Drama"],
  },
  {
    id: "d97b6809-009d-4f7b-a5b9-8d46fb04e091",
    title: "Caesar Must Die (Cesare deve morire)",
    year: 1985,
    cover: "http://dummyimage.com/216x182.jpg/dddddd/000000",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    duration: 1966,
    contentRating: "PG-13",
    source:
      "https://uiuc.edu/ligula/in/lacus.html?justo=fermentum&in=justo&blandit=nec&ultrices=condimentum&enim=neque&lorem=sapien&ipsum=placerat&dolor=ante&sit=nulla&amet=justo&consectetuer=aliquam&adipiscing=quis&elit=turpis&proin=eget&interdum=elit&mauris=sodales&non=scelerisque&ligula=mauris&pellentesque=sit&ultrices=amet&phasellus=eros&id=suspendisse&sapien=accumsan&in=tortor&sapien=quis&iaculis=turpis&congue=sed&vivamus=ante&metus=vivamus&arcu=tortor&adipiscing=duis&molestie=mattis&hendrerit=egestas&at=metus&vulputate=aenean&vitae=fermentum&nisl=donec&aenean=ut&lectus=mauris&pellentesque=eget&eget=massa&nunc=tempor&donec=convallis&quis=nulla&orci=neque&eget=libero&orci=convallis&vehicula=eget&condimentum=eleifend&curabitur=luctus&in=ultricies&libero=eu&ut=nibh&massa=quisque&volutpat=id&convallis=justo&morbi=sit&odio=amet&odio=sapien&elementum=dignissim&eu=vestibulum&interdum=vestibulum&eu=ante&tincidunt=ipsum&in=primis&leo=in&maecenas=faucibus&pulvinar=orci&lobortis=luctus&est=et",
    tags: ["Drama", "Drama", "Crime|Documentary"],
  },
  {
    id: "bedc4dd4-289b-45c4-b7d6-95de29a65a32",
    title: "Get Out Your Handkerchiefs (Préparez vos mouchoirs)",
    year: 2008,
    cover: "http://dummyimage.com/201x192.jpg/cc0000/ffffff",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    duration: 2040,
    contentRating: "R",
    source:
      "https://ed.gov/natoque/penatibus/et/magnis/dis.png?pede=cursus&justo=urna&lacinia=ut&eget=tellus&tincidunt=nulla&eget=ut&tempus=erat&vel=id&pede=mauris",
    tags: ["Action|Comedy"],
  },
  {
    id: "56456fef-82e0-49e5-b443-f217cbe5fd95",
    title: "Sherlock Jr.",
    year: 1994,
    cover: "http://dummyimage.com/150x174.jpg/cc0000/ffffff",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    duration: 1984,
    contentRating: "PG",
    source:
      "https://ed.gov/feugiat/non/pretium.aspx?quis=quam&justo=pharetra&maecenas=magna&rhoncus=ac&aliquam=consequat&lacus=metus&morbi=sapien&quis=ut&tortor=nunc&id=vestibulum&nulla=ante&ultrices=ipsum&aliquet=primis&maecenas=in&leo=faucibus&odio=orci&condimentum=luctus&id=et&luctus=ultrices&nec=posuere&molestie=cubilia&sed=curae&justo=mauris&pellentesque=viverra&viverra=diam&pede=vitae&ac=quam&diam=suspendisse&cras=potenti&pellentesque=nullam&volutpat=porttitor&dui=lacus&maecenas=at&tristique=turpis&est=donec&et=posuere&tempus=metus&semper=vitae&est=ipsum&quam=aliquam&pharetra=non&magna=mauris&ac=morbi&consequat=non&metus=lectus&sapien=aliquam&ut=sit&nunc=amet&vestibulum=diam&ante=in&ipsum=magna&primis=bibendum&in=imperdiet&faucibus=nullam&orci=orci&luctus=pede&et=venenatis&ultrices=non&posuere=sodales",
    tags: ["Comedy|Thriller", "Drama", "Children|Comedy|Fantasy"],
  },
  {
    id: "05c4d487-7534-4027-b948-16e93c3abd99",
    title: "Devil Dared Me To, The",
    year: 2003,
    cover: "http://dummyimage.com/158x102.bmp/cc0000/ffffff",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    duration: 2039,
    contentRating: "G",
    source:
      "http://nih.gov/magna/vulputate/luctus.aspx?id=porttitor&consequat=lorem&in=id&consequat=ligula&ut=suspendisse&nulla=ornare&sed=consequat&accumsan=lectus&felis=in&ut=est&at=risus&dolor=auctor&quis=sed&odio=tristique&consequat=in&varius=tempus&integer=sit&ac=amet&leo=sem&pellentesque=fusce&ultrices=consequat&mattis=nulla&odio=nisl&donec=nunc&vitae=nisl&nisi=duis&nam=bibendum&ultrices=felis&libero=sed&non=interdum&mattis=venenatis&pulvinar=turpis&nulla=enim&pede=blandit&ullamcorper=mi&augue=in&a=porttitor&suscipit=pede&nulla=justo&elit=eu&ac=massa&nulla=donec&sed=dapibus&vel=duis&enim=at&sit=velit&amet=eu&nunc=est&viverra=congue&dapibus=elementum&nulla=in&suscipit=hac&ligula=habitasse&in=platea&lacus=dictumst&curabitur=morbi&at=vestibulum&ipsum=velit&ac=id&tellus=pretium&semper=iaculis&interdum=diam&mauris=erat&ullamcorper=fermentum&purus=justo&sit=nec&amet=condimentum",
    tags: [
      "Action|Comedy|Crime|Thriller",
      "Action|Adventure|Romance|Western",
      "Comedy|Drama",
      "Children|Comedy|Fantasy",
    ],
  },
  {
    id: "9aab933b-d5b8-4344-9d52-e3bb66992baf",
    title: "Craig Ferguson: I'm Here To Help",
    year: 1998,
    cover: "http://dummyimage.com/177x113.jpg/5fa2dd/ffffff",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    duration: 1911,
    contentRating: "NC-17",
    source:
      "https://xinhuanet.com/nam/congue/risus/semper.html?consectetuer=tempus&adipiscing=semper&elit=est&proin=quam&risus=pharetra&praesent=magna&lectus=ac&vestibulum=consequat&quam=metus&sapien=sapien&varius=ut&ut=nunc&blandit=vestibulum&non=ante&interdum=ipsum&in=primis&ante=in&vestibulum=faucibus&ante=orci&ipsum=luctus&primis=et&in=ultrices&faucibus=posuere&orci=cubilia&luctus=curae&et=mauris&ultrices=viverra&posuere=diam&cubilia=vitae&curae=quam&duis=suspendisse&faucibus=potenti&accumsan=nullam&odio=porttitor&curabitur=lacus&convallis=at&duis=turpis&consequat=donec&dui=posuere&nec=metus&nisi=vitae&volutpat=ipsum&eleifend=aliquam&donec=non&ut=mauris&dolor=morbi",
    tags: [
      "Comedy|Romance",
      "Action|Adventure|Thriller",
      "Drama|Romance",
      "Comedy|Drama|Musical|Romance",
      "Drama",
    ],
  },
  {
    id: "e990e93f-201e-4169-abd3-750a79437b19",
    title: "Iron Mask, The",
    year: 1986,
    cover: "http://dummyimage.com/197x156.jpg/cc0000/ffffff",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    duration: 1950,
    contentRating: "R",
    source:
      "https://addtoany.com/tincidunt/eu/felis.json?eget=sem&eleifend=duis&luctus=aliquam&ultricies=convallis&eu=nunc&nibh=proin&quisque=at&id=turpis&justo=a&sit=pede&amet=posuere&sapien=nonummy&dignissim=integer&vestibulum=non&vestibulum=velit&ante=donec&ipsum=diam&primis=neque&in=vestibulum&faucibus=eget&orci=vulputate&luctus=ut&et=ultrices&ultrices=vel&posuere=augue&cubilia=vestibulum&curae=ante&nulla=ipsum&dapibus=primis&dolor=in&vel=faucibus&est=orci&donec=luctus&odio=et&justo=ultrices&sollicitudin=posuere&ut=cubilia&suscipit=curae&a=donec&feugiat=pharetra&et=magna&eros=vestibulum&vestibulum=aliquet&ac=ultrices&est=erat&lacinia=tortor&nisi=sollicitudin&venenatis=mi&tristique=sit&fusce=amet&congue=lobortis&diam=sapien&id=sapien&ornare=non&imperdiet=mi&sapien=integer&urna=ac&pretium=neque&nisl=duis&ut=bibendum&volutpat=morbi&sapien=non&arcu=quam&sed=nec&augue=dui&aliquam=luctus&erat=rutrum&volutpat=nulla&in=tellus&congue=in&etiam=sagittis&justo=dui&etiam=vel&pretium=nisl&iaculis=duis&justo=ac&in=nibh&hac=fusce&habitasse=lacus&platea=purus",
    tags: ["Animation|Sci-Fi", "Drama", "Documentary"],
  },
  {
    id: "690395c6-0c39-45ad-bddb-583e82dae0a2",
    title: "Duel at Silver Creek, The",
    year: 1994,
    cover: "http://dummyimage.com/211x166.bmp/ff4444/ffffff",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    duration: 2014,
    contentRating: "NC-17",
    source:
      "https://dmoz.org/lorem.html?faucibus=integer&orci=ac&luctus=neque&et=duis&ultrices=bibendum&posuere=morbi&cubilia=non&curae=quam&duis=nec&faucibus=dui&accumsan=luctus&odio=rutrum&curabitur=nulla&convallis=tellus&duis=in&consequat=sagittis&dui=dui&nec=vel&nisi=nisl&volutpat=duis&eleifend=ac&donec=nibh&ut=fusce&dolor=lacus&morbi=purus&vel=aliquet&lectus=at&in=feugiat&quam=non&fringilla=pretium&rhoncus=quis&mauris=lectus&enim=suspendisse&leo=potenti&rhoncus=in&sed=eleifend&vestibulum=quam&sit=a&amet=odio&cursus=in&id=hac&turpis=habitasse&integer=platea&aliquet=dictumst&massa=maecenas&id=ut&lobortis=massa&convallis=quis&tortor=augue&risus=luctus&dapibus=tincidunt&augue=nulla&vel=mollis&accumsan=molestie&tellus=lorem&nisi=quisque&eu=ut&orci=erat&mauris=curabitur&lacinia=gravida&sapien=nisi&quis=at&libero=nibh&nullam=in&sit=hac&amet=habitasse&turpis=platea&elementum=dictumst&ligula=aliquam&vehicula=augue&consequat=quam",
    tags: ["Action|Drama|Sci-Fi", "Drama|IMAX", "Horror|Thriller", "Comedy"],
  },
  {
    id: "2df2c5a5-f35e-4cae-aec5-036b8c881a68",
    title: "Burton and Taylor",
    year: 1997,
    cover: "http://dummyimage.com/116x149.jpg/cc0000/ffffff",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    duration: 2034,
    contentRating: "NC-17",
    source:
      "https://pinterest.com/quam/pharetra/magna/ac/consequat.js?massa=tincidunt&id=ante&nisl=vel&venenatis=ipsum&lacinia=praesent&aenean=blandit&sit=lacinia&amet=erat&justo=vestibulum&morbi=sed&ut=magna&odio=at&cras=nunc&mi=commodo&pede=placerat&malesuada=praesent&in=blandit",
    tags: ["Documentary"],
  },
  {
    id: "9a8522f8-1db7-434c-9e76-40010481c813",
    title: "Fright to the Finish",
    year: 2011,
    cover: "http://dummyimage.com/161x194.bmp/ff4444/ffffff",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    duration: 1955,
    contentRating: "PG",
    source:
      "https://bing.com/natoque/penatibus/et/magnis.jsp?eu=ante&orci=ipsum&mauris=primis&lacinia=in&sapien=faucibus&quis=orci&libero=luctus&nullam=et&sit=ultrices&amet=posuere&turpis=cubilia&elementum=curae&ligula=mauris&vehicula=viverra&consequat=diam&morbi=vitae&a=quam&ipsum=suspendisse&integer=potenti&a=nullam&nibh=porttitor&in=lacus&quis=at&justo=turpis&maecenas=donec&rhoncus=posuere&aliquam=metus&lacus=vitae&morbi=ipsum&quis=aliquam&tortor=non&id=mauris&nulla=morbi&ultrices=non&aliquet=lectus&maecenas=aliquam&leo=sit&odio=amet&condimentum=diam&id=in&luctus=magna&nec=bibendum&molestie=imperdiet&sed=nullam&justo=orci&pellentesque=pede&viverra=venenatis&pede=non&ac=sodales&diam=sed&cras=tincidunt&pellentesque=eu&volutpat=felis&dui=fusce&maecenas=posuere&tristique=felis&est=sed&et=lacus&tempus=morbi&semper=sem&est=mauris&quam=laoreet&pharetra=ut&magna=rhoncus&ac=aliquet&consequat=pulvinar&metus=sed&sapien=nisl&ut=nunc&nunc=rhoncus&vestibulum=dui&ante=vel&ipsum=sem&primis=sed&in=sagittis&faucibus=nam&orci=congue",
    tags: [
      "Documentary|Drama",
      "Comedy",
      "Horror|Sci-Fi|Thriller",
      "Fantasy|Horror",
    ],
  },
  {
    id: "c83e5d78-341d-42ad-ac25-e6d6ea9b0af7",
    title: "Easy Virtue",
    year: 2010,
    cover: "http://dummyimage.com/182x242.bmp/cc0000/ffffff",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    duration: 1981,
    contentRating: "G",
    source:
      "http://weather.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png?sit=nunc&amet=vestibulum&nulla=ante&quisque=ipsum&arcu=primis&libero=in&rutrum=faucibus",
    tags: ["Thriller", "Drama|Musical", "Drama", "Action|Adventure"],
  },
  {
    id: "dc363e82-715e-41ed-87b9-1b14256637b4",
    title: "On Dangerous Ground",
    year: 2012,
    cover: "http://dummyimage.com/158x164.bmp/ff4444/ffffff",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    duration: 1949,
    contentRating: "G",
    source:
      "https://wordpress.org/pharetra.jsp?in=rhoncus&est=aliquam&risus=lacus&auctor=morbi&sed=quis&tristique=tortor&in=id&tempus=nulla&sit=ultrices&amet=aliquet&sem=maecenas&fusce=leo&consequat=odio&nulla=condimentum&nisl=id&nunc=luctus&nisl=nec&duis=molestie&bibendum=sed&felis=justo&sed=pellentesque&interdum=viverra&venenatis=pede&turpis=ac&enim=diam&blandit=cras&mi=pellentesque&in=volutpat&porttitor=dui&pede=maecenas&justo=tristique&eu=est&massa=et&donec=tempus&dapibus=semper&duis=est&at=quam&velit=pharetra&eu=magna&est=ac&congue=consequat&elementum=metus&in=sapien&hac=ut&habitasse=nunc&platea=vestibulum&dictumst=ante",
    tags: [
      "Horror",
      "Comedy|Drama|Romance",
      "Documentary",
      "Horror",
      "Drama|Romance",
    ],
  },
  {
    id: "cc8a1e44-c44b-48b5-b2ab-ce9442fb3164",
    title: "Truth of Lie, The (Die Wahrheit der Lüge)",
    year: 2012,
    cover: "http://dummyimage.com/157x193.bmp/cc0000/ffffff",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    duration: 1960,
    contentRating: "NC-17",
    source:
      "https://businesswire.com/sit/amet/nunc/viverra/dapibus/nulla.html?felis=nunc&fusce=rhoncus&posuere=dui&felis=vel&sed=sem&lacus=sed&morbi=sagittis&sem=nam&mauris=congue&laoreet=risus&ut=semper&rhoncus=porta&aliquet=volutpat&pulvinar=quam&sed=pede&nisl=lobortis&nunc=ligula&rhoncus=sit&dui=amet&vel=eleifend&sem=pede&sed=libero&sagittis=quis&nam=orci&congue=nullam&risus=molestie&semper=nibh&porta=in&volutpat=lectus&quam=pellentesque&pede=at&lobortis=nulla&ligula=suspendisse&sit=potenti&amet=cras&eleifend=in&pede=purus&libero=eu&quis=magna&orci=vulputate&nullam=luctus&molestie=cum&nibh=sociis&in=natoque&lectus=penatibus",
    tags: [
      "Comedy|Crime|Fantasy",
      "Documentary|Horror",
      "Mystery|Romance|Thriller",
    ],
  },
  {
    id: "e078b8cf-891e-41dd-b85e-294df00d1c32",
    title: "Dead Silence",
    year: 2006,
    cover: "http://dummyimage.com/178x120.bmp/cc0000/ffffff",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    duration: 2028,
    contentRating: "PG",
    source:
      "https://ow.ly/quis/turpis/eget/elit/sodales.jpg?in=dui&tempus=nec&sit=nisi&amet=volutpat&sem=eleifend&fusce=donec&consequat=ut",
    tags: ["Animation|Sci-Fi", "Drama", "Documentary"],
  },
  {
    id: "c6404983-972f-4089-a57f-6ebf9115c7f2",
    title: "Clouds of Sils Maria",
    year: 1999,
    cover: "http://dummyimage.com/188x146.bmp/ff4444/ffffff",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    duration: 2032,
    contentRating: "G",
    source:
      "https://oakley.com/erat/eros/viverra.js?sem=est&sed=risus&sagittis=auctor&nam=sed&congue=tristique&risus=in&semper=tempus&porta=sit&volutpat=amet&quam=sem&pede=fusce&lobortis=consequat&ligula=nulla&sit=nisl&amet=nunc&eleifend=nisl&pede=duis&libero=bibendum&quis=felis&orci=sed&nullam=interdum&molestie=venenatis&nibh=turpis&in=enim&lectus=blandit&pellentesque=mi&at=in&nulla=porttitor&suspendisse=pede&potenti=justo&cras=eu&in=massa&purus=donec&eu=dapibus&magna=duis&vulputate=at&luctus=velit&cum=eu&sociis=est&natoque=congue&penatibus=elementum&et=in&magnis=hac&dis=habitasse&parturient=platea&montes=dictumst&nascetur=morbi&ridiculus=vestibulum&mus=velit&vivamus=id&vestibulum=pretium&sagittis=iaculis&sapien=diam&cum=erat&sociis=fermentum&natoque=justo&penatibus=nec&et=condimentum&magnis=neque&dis=sapien&parturient=placerat&montes=ante&nascetur=nulla&ridiculus=justo&mus=aliquam&etiam=quis&vel=turpis&augue=eget&vestibulum=elit&rutrum=sodales&rutrum=scelerisque&neque=mauris&aenean=sit&auctor=amet&gravida=eros&sem=suspendisse&praesent=accumsan&id=tortor",
    tags: ["Action|Drama", "Drama|Thriller", "Crime|Horror|Thriller", "Drama"],
  },
  {
    id: "4d721f1f-72a4-419b-9dc1-c97ec21d7227",
    title: "Episode 3: Enjoy Poverty",
    year: 1999,
    cover: "http://dummyimage.com/229x163.bmp/ff4444/ffffff",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    duration: 2056,
    contentRating: "PG",
    source:
      "http://marketwatch.com/sed/interdum/venenatis/turpis/enim/blandit.xml?interdum=diam&in=erat&ante=fermentum&vestibulum=justo&ante=nec&ipsum=condimentum&primis=neque",
    tags: ["Action|Comedy|Sci-Fi"],
  },
];

module.exports = moviesMock;
