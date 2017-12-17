var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();

// ---------------------- Creating Box Placeholders ---------------------- //
var box1Group = new Konva.Group({
});

var box2Group = new Konva.Group({
});

var box3Group = new Konva.Group({
});

var box4Group = new Konva.Group({
});

var box5Group = new Konva.Group({
});

var box6Group = new Konva.Group({
});

var box7Group = new Konva.Group({
});

var box8Group = new Konva.Group({
});

var box9Group = new Konva.Group({
});

var box10Group = new Konva.Group({
});

var box11Group = new Konva.Group({
});

var box12Group = new Konva.Group({
});

var box13Group = new Konva.Group({
});

var box14Group = new Konva.Group({
});

var box15Group = new Konva.Group({
});

var box16Group = new Konva.Group({
});

var box17Group = new Konva.Group({
});

var box18Group = new Konva.Group({
});

var box19Group = new Konva.Group({
});

var box20Group = new Konva.Group({
});

// ---------------------- Box1 ---------------------- //
var box1Text = new Konva.Text({
    x: 0,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box1Rect = new Konva.Rect({
    x: 0,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box2 ---------------------- //
var box2Text = new Konva.Text({
    x: 100,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box2Rect = new Konva.Rect({
    x: 100,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box3 ---------------------- //
var box3Text = new Konva.Text({
    x: 200,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box3Rect = new Konva.Rect({
    x: 200,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box4 ---------------------- //
var box4Text = new Konva.Text({
    x: 300,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box4Rect = new Konva.Rect({
    x: 300,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box5 ---------------------- //
var box5Text = new Konva.Text({
    x: 400,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box5Rect = new Konva.Rect({
    x: 400,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box6 ---------------------- //
var box6Text = new Konva.Text({
    x: 500,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box6Rect = new Konva.Rect({
    x: 500,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box7 ---------------------- //
var box7Text = new Konva.Text({
    x: 600,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box7Rect = new Konva.Rect({
    x: 600,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box8 ---------------------- //
var box8Text = new Konva.Text({
    x: 700,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box8Rect = new Konva.Rect({
    x: 700,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box9 ---------------------- //
var box9Text = new Konva.Text({
    x: 800,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box9Rect = new Konva.Rect({
    x: 800,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box10 ---------------------- //
var box10Text = new Konva.Text({
    x: 900,
    y: 50,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box10Rect = new Konva.Rect({
    x: 900,
    y: 50,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box11 ---------------------- //
var box11Text = new Konva.Text({
    x: 0,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box11Rect = new Konva.Rect({
    x: 0,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box12 ---------------------- //
var box12Text = new Konva.Text({
    x: 100,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box12Rect = new Konva.Rect({
    x: 100,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box13 ---------------------- //
var box13Text = new Konva.Text({
    x: 200,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box13Rect = new Konva.Rect({
    x: 200,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box14 ---------------------- //
var box14Text = new Konva.Text({
    x: 300,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box14Rect = new Konva.Rect({
    x: 300,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box15 ---------------------- //
var box15Text = new Konva.Text({
    x: 400,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box15Rect = new Konva.Rect({
    x: 400,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box16 ---------------------- //
var box16Text = new Konva.Text({
    x: 500,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box16Rect = new Konva.Rect({
    x: 500,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box17 ---------------------- //
var box17Text = new Konva.Text({
    x: 600,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box17Rect = new Konva.Rect({
    x: 600,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box18 ---------------------- //
var box18Text = new Konva.Text({
    x: 700,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box18Rect = new Konva.Rect({
    x: 700,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box19 ---------------------- //
var box19Text = new Konva.Text({
    x: 800,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box19Rect = new Konva.Rect({
    x: 800,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

// ---------------------- Box20 ---------------------- //
var box20Text = new Konva.Text({
    x: 900,
    y: 180,
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var box20Rect = new Konva.Rect({
    x: 900,
    y: 180,
    width: 75,
    height: 75,
    fill: '#ffffff',
    stroke: 'black',
    strokeWidth: 4
});

box1Group.add(box1Rect).add(box1Text);
box2Group.add(box2Rect).add(box2Text);
box3Group.add(box3Rect).add(box3Text);
box4Group.add(box4Rect).add(box4Text);
box5Group.add(box5Rect).add(box5Text);
box6Group.add(box6Rect).add(box6Text);
box7Group.add(box7Rect).add(box7Text);
box8Group.add(box8Rect).add(box8Text);
box9Group.add(box9Rect).add(box9Text);
box10Group.add(box10Rect).add(box10Text);
box11Group.add(box11Rect).add(box11Text);
box12Group.add(box12Rect).add(box12Text);
box13Group.add(box13Rect).add(box13Text);
box14Group.add(box14Rect).add(box14Text);
box15Group.add(box15Rect).add(box15Text);
box16Group.add(box16Rect).add(box16Text);
box17Group.add(box17Rect).add(box17Text);
box18Group.add(box18Rect).add(box18Text);
box19Group.add(box19Rect).add(box19Text);
box20Group.add(box20Rect).add(box20Text);

layer.add(box1Group);
layer.add(box2Group);
layer.add(box3Group);
layer.add(box4Group);
layer.add(box5Group);
layer.add(box6Group);
layer.add(box7Group);
layer.add(box8Group);
layer.add(box9Group);
layer.add(box10Group);
layer.add(box11Group);
layer.add(box12Group);
layer.add(box13Group);
layer.add(box14Group);
layer.add(box15Group);
layer.add(box16Group);
layer.add(box17Group);
layer.add(box18Group);
layer.add(box19Group);
layer.add(box20Group);


// ---------------------- Creating Colors in Box Bank ---------------------- //
var red1Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -100 ? -100 : pos.x && pos.x > 825 ? 825 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red2Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -200 ? -200 : pos.x && pos.x > 725 ? 725 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red3Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -500 ? -500 : pos.x && pos.x > 425 ? 425 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red4Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -900 ? -900 : pos.x && pos.x > 25 ? 25 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red5Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -400 ? -400 : pos.x && pos.x > 525 ? 525 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red6Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -900 ? -900 : pos.x && pos.x > 25 ? 25 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red7Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -800 ? -800 : pos.x && pos.x > 125 ? 125 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red8Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -100 ? -100 : pos.x && pos.x > 825 ? 825 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red9Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -300 ? -300 : pos.x && pos.x > 625 ? 625 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red10Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -200 ? -200 : pos.x && pos.x > 725 ? 725 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red11Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < 0 ? 0 : pos.x && pos.x > 925 ? 925 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red12Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -600 ? -600 : pos.x && pos.x > 325 ? 325 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red13Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -600 ? -600 : pos.x && pos.x > 325 ? 325 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red14Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -400 ? -400 : pos.x && pos.x > 525 ? 525 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red15Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -800 ? -800 : pos.x && pos.x > 125 ? 125 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red16Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -300 ? -300 : pos.y && pos.y > 125 ? 125 : pos.y;
        var newX = pos.x < -700 ? -700 : pos.x && pos.x > 225 ? 225 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red17Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -700 ? -700 : pos.x && pos.x > 225 ? 225 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red18Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -500 ? -500 : pos.x && pos.x > 425 ? 425 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red19Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < -300 ? -300 : pos.x && pos.x > 625 ? 625 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

var red20Group = new Konva.Group({
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < -400 ? -400 : pos.y && pos.y > 25 ? 25 : pos.y;
        var newX = pos.x < 0 ? 0 : pos.x && pos.x > 925 ? 925 : pos.x;
        return {
            x: newX,
            y: newY
        };
    }
});

// ---------------------- Red1 ---------------------- //
var red1Text = new Konva.Text({
    x: 100,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '1',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red1Rect = new Konva.Rect({
    x: 100,
    y: 400,
    width: 75,
    height: 75,
    fill: '#f48686'
});

// ---------------------- Red2 ---------------------- //
var red2Text = new Konva.Text({
    x: 200,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '2',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red2Rect = new Konva.Rect({
    x: 200,
    y: 400,
    width: 75,
    height: 75,
    fill: '#f37b7c'
});

// ---------------------- Red3 ---------------------- //
var red3Text = new Konva.Text({
    x: 500,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '3',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red3Rect = new Konva.Rect({
    x: 500,
    y: 300,
    width: 75,
    height: 75,
    fill: '#f27475'
});

// ---------------------- Red4 ---------------------- //
var red4Text = new Konva.Text({
    x: 900,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '4',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red4Rect = new Konva.Rect({
    x: 900,
    y: 300,
    width: 75,
    height: 75,
    fill: '#f16a6b'
});

// ---------------------- Red5 ---------------------- //
var red5Text = new Konva.Text({
    x: 400,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '5',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red5Rect = new Konva.Rect({
    x: 400,
    y: 400,
    width: 75,
    height: 75,
    fill: '#f05d5e'
});

// ---------------------- Red6 ---------------------- //
var red6Text = new Konva.Text({
    x: 900,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '6',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red6Rect = new Konva.Rect({
    x: 900,
    y: 400,
    width: 75,
    height: 75,
    fill: '#ef5a59'
});

// ---------------------- Red7 ---------------------- //
var red7Text = new Konva.Text({
    x: 800,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '7',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red7Rect = new Konva.Rect({
    x: 800,
    y: 300,
    width: 75,
    height: 75,
    fill: '#ef5050'
});

// ---------------------- Red8 ---------------------- //
var red8Text = new Konva.Text({
    x: 100,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '8',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red8Rect = new Konva.Rect({
    x: 100,
    y: 300,
    width: 75,
    height: 75,
    fill: '#ec494a'
});

// ---------------------- Red9 ---------------------- //
var red9Text = new Konva.Text({
    x: 300,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '9',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red9Rect = new Konva.Rect({
    x: 300,
    y: 300,
    width: 75,
    height: 75,
    fill: '#ec403f'
});

// ---------------------- Red10 ---------------------- //
var red10Text = new Konva.Text({
    x: 200,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '10',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red10Rect = new Konva.Rect({
    x: 200,
    y: 300,
    width: 75,
    height: 75,
    fill: '#ed1f24'
});

// ---------------------- Red11 ---------------------- //
var red11Text = new Konva.Text({
    x: 0,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '11',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red11Rect = new Konva.Rect({
    x: 0,
    y: 300,
    width: 75,
    height: 75,
    fill: '#e31e25'
});

// ---------------------- Red12 ---------------------- //
var red12Text = new Konva.Text({
    x: 600,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '12',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red12Rect = new Konva.Rect({
    x: 600,
    y: 400,
    width: 75,
    height: 75,
    fill: '#d22227'
});

// ---------------------- Red13 ---------------------- //
var red13Text = new Konva.Text({
    x: 600,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '13',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red13Rect = new Konva.Rect({
    x: 600,
    y: 300,
    width: 75,
    height: 75,
    fill: '#b92325'
});

// ---------------------- Red14 ---------------------- //
var red14Text = new Konva.Text({
    x: 400,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '14',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red14Rect = new Konva.Rect({
    x: 400,
    y: 300,
    width: 75,
    height: 75,
    fill: '#b12224'
});

// ---------------------- Red15 ---------------------- //
var red15Text = new Konva.Text({
    x: 800,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '15',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red15Rect = new Konva.Rect({
    x: 800,
    y: 400,
    width: 75,
    height: 75,
    fill: '#a01f21'
});

// ---------------------- Red16 ---------------------- //
var red16Text = new Konva.Text({
    x: 700,
    y: 300,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '16',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red16Rect = new Konva.Rect({
    x: 700,
    y: 300,
    width: 75,
    height: 75,
    fill: '#931c1d'
});

// ---------------------- Red17 ---------------------- //
var red17Text = new Konva.Text({
    x: 700,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '17',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red17Rect = new Konva.Rect({
    x: 700,
    y: 400,
    width: 75,
    height: 75,
    fill: '#821718'
});

// ---------------------- Red18 ---------------------- //
var red18Text = new Konva.Text({
    x: 500,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '18',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red18Rect = new Konva.Rect({
    x: 500,
    y: 400,
    width: 75,
    height: 75,
    fill: '#711211'
});

// ---------------------- Red19 ---------------------- //
var red19Text = new Konva.Text({
    x: 300,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '19',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red19Rect = new Konva.Rect({
    x: 300,
    y: 400,
    width: 75,
    height: 75,
    fill: '#620e10'
});

// ---------------------- Red20 ---------------------- //
var red20Text = new Konva.Text({
    x: 0,
    y: 400,
    fontSize: 30,
    fontFamily: 'Montserrat',
    text: '20',
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red20Rect = new Konva.Rect({
    x: 0,
    y: 400,
    width: 75,
    height: 75,
    fill: '#541212'
});

red1Group.add(red1Rect).add(red1Text);
red2Group.add(red2Rect).add(red2Text);
red3Group.add(red3Rect).add(red3Text);
red4Group.add(red4Rect).add(red4Text);
red5Group.add(red5Rect).add(red5Text);
red6Group.add(red6Rect).add(red6Text);
red7Group.add(red7Rect).add(red7Text);
red8Group.add(red8Rect).add(red8Text);
red9Group.add(red9Rect).add(red9Text);
red10Group.add(red10Rect).add(red10Text);
red11Group.add(red11Rect).add(red11Text);
red12Group.add(red12Rect).add(red12Text);
red13Group.add(red13Rect).add(red13Text);
red14Group.add(red14Rect).add(red14Text);
red15Group.add(red15Rect).add(red15Text);
red16Group.add(red16Rect).add(red16Text);
red17Group.add(red17Rect).add(red17Text);
red18Group.add(red18Rect).add(red18Text);
red19Group.add(red19Rect).add(red19Text);
red20Group.add(red20Rect).add(red20Text);

layer.add(red1Group);
layer.add(red2Group);
layer.add(red3Group);
layer.add(red4Group);
layer.add(red5Group);
layer.add(red6Group);
layer.add(red7Group);
layer.add(red8Group);
layer.add(red9Group);
layer.add(red10Group);
layer.add(red11Group);
layer.add(red12Group);
layer.add(red13Group);
layer.add(red14Group);
layer.add(red15Group);
layer.add(red16Group);
layer.add(red17Group);
layer.add(red18Group);
layer.add(red19Group);
layer.add(red20Group);

// add the layer to the stage
stage.add(layer);

// ---------------------- Color Changing Function ---------------------- //
$("#number1").on("change",function() {
    if( $( "#number1 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number1 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number1 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number1 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number1 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number1 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number1 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number1 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number1 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number1 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number1 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number1 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number1 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number1 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number1 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number1 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number1 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number1 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number1 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number1 option:selected" ).text() == "20"){
        fill = "#541212";
    }
    
    box1Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number2").on("change",function() {    
    if( $( "#number2 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number2 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number2 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number2 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number2 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number2 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number2 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number2 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number2 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number2 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number2 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number2 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number2 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number2 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number2 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number2 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number2 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number2 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number2 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number2 option:selected" ).text() == "20"){
        fill = "#541212";
    }
    
    box2Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number3").on("change",function() {
    if( $( "#number3 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number3 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number3 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number3 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number3 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number3 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number3 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number3 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number3 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number3 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number3 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number3 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number3 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number3 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number3 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number3 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number3 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number3 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number3 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number3 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box3Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number4").on("change",function() {
    if( $( "#number5 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number4 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number4 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number4 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number4 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number4 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number4 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number4 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number4 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number4 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number4 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number4 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number4 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number4 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number4 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number4 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number4 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number4 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number4 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number4 option:selected" ).text() == "20"){
        fill = "#541212";
    }     
    
    box4Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number5").on("change",function() {
    if( $( "#number5 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number5 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number5 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number5 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number5 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number5 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number5 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number5 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number5 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number5 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number5 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number5 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number5 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number5 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number5 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number5 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number5 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number5 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number5 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number5 option:selected" ).text() == "20"){
        fill = "#541212";
    }     
    
    box5Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number6").on("change",function() {
    if( $( "#number6 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number6 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number6 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number6 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number6 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number6 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number6 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number6 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number6 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number6 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number6 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number6 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number6 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number6 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number6 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number6 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number6 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number6 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number6 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number6 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box6Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number7").on("change",function() {
    if( $( "#number7 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number7 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number7 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number7 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number7 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number7 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number7 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number7 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number7 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number7 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number7 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number7 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number7 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number7 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number7 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number7 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number7 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number7 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number7 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number7 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box7Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number8").on("change",function() {
    if( $( "#number8 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number8 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number8 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number8 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number8 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number8 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number8 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number8 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number8 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number8 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number8 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number8 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number8 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number8 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number8 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number8 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number8 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number8 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number8 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number8 option:selected" ).text() == "20"){
        fill = "#541212";
    } 
    
    box8Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number9").on("change",function() {
    if( $( "#number9 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number9 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number9 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number9 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number9 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number9 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number9 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number9 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number9 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number9 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number9 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number9 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number9 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number9 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number9 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number9 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number9 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number9 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number9 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number9 option:selected" ).text() == "20"){
        fill = "#541212";
    }  
    
    box9Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number10").on("change",function() {
    if( $( "#number10 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number10 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number10 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number10 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number10 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number10 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number10 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number10 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number10 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number10 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number10 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number10 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number10 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number10 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number10 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number10 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number10 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number10 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number10 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number10 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box10Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number11").on("change",function() {
    if( $( "#number11 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number11 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number11 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number11 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number11 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number11 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number11 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number11 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number11 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number11 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number11 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number11 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number11 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number11 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number11 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number11 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number11 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number11 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number11 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number11 option:selected" ).text() == "20"){
        fill = "#541212";
    }  
    
    box11Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number12").on("change",function() {
    if( $( "#number12 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number12 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number12 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number12 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number12 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number12 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number12 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number12 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number12 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number12 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number12 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number12 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number12 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number12 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number12 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number12 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number12 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number12 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number12 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number12 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box12Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number13").on("change",function() {
    if( $( "#number13 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number13 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number13 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number13 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number13 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number13 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number13 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number13 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number13 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number13 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number13 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number13 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number13 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number13 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number13 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number13 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number13 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number13 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number13 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number13 option:selected" ).text() == "20"){
        fill = "#541212";
    }    
    
    box13Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number14").on("change",function() {
    if( $( "#number14 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number14 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number14 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number14 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number14 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number14 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number14 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number14 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number14 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number14 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number14 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number14 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number14 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number14 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number14 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number14 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number14 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number14 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number14 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number14 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box14Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number15").on("change",function() {
    if( $( "#number15 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number15 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number15 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number15 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number15 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number15 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number15 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number15 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number15 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number15 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number15 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number15 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number15 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number15 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number15 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number15 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number15 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number15 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number15 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number15 option:selected" ).text() == "20"){
        fill = "#541212";
    }
    
    box15Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number16").on("change",function() {
    if( $( "#number16 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number16 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number16 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number16 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number16 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number16 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number16 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number16 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number16 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number16 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number16 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number16 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number16 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number16 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number16 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number16 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number16 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number16 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number16 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number16 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box16Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});


$("#number17").on("change",function() {
    if( $( "#number17 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number17 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number17 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number17 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number17 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number17 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number17 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number17 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number17 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number17 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number17 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number17 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number17 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number17 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number17 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number17 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number17 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number17 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number17 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number17 option:selected" ).text() == "20"){
        fill = "#541212";
    }   
    
    box17Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});
    

$("#number18").on("change",function() {
    if( $( "#number18 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number18 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number18 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number18 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number18 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number18 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number18 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number18 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number18 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number18 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number18 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number18 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number18 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number18 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number18 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number18 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number18 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number18 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number18 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number18 option:selected" ).text() == "20"){
        fill = "#541212";
    }    
    
    box18Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number19").on("change",function() {
    if( $( "#number19 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number19 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number19 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number19 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number19 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number19 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number19 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number19 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number19 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number19 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number19 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number19 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number19 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number19 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number19 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number19 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number19 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number19 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number19 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number19 option:selected" ).text() == "20"){
        fill = "#541212";
    }    
    
    box19Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

$("#number20").on("change",function() {
    if( $( "#number20 option:selected" ).text() == "1"){
        fill = "#f48686";
    }
    else if( $( "#number20 option:selected" ).text() == "2"){
        fill = "#f37b7c";
    }
    else if( $( "#number20 option:selected" ).text() == "3"){
        fill = "#f27475";
    }
    else if( $( "#number20 option:selected" ).text() == "4"){
        fill = "#f16a6b";
    }
    else if( $( "#number20 option:selected" ).text() == "5"){
        fill = "#f05d5e";
    }
    else if( $( "#number20 option:selected" ).text() == "6"){
        fill = "#ef5a59";
    }
    else if( $( "#number20 option:selected" ).text() == "7"){
        fill = "#ef5050";
    }
    else if( $( "#number20 option:selected" ).text() == "8"){
        fill = "#ec494a";
    }
    else if( $( "#number20 option:selected" ).text() == "9"){
        fill = "#ec403f";
    }
    else if( $( "#number20 option:selected" ).text() == "10"){
        fill = "#ed1f24";
    }
    else if( $( "#number20 option:selected" ).text() == "11"){
        fill = "#e31e25";
    }
    else if( $( "#number20 option:selected" ).text() == "12"){
        fill = "#d22227";
    }
    else if( $( "#number20 option:selected" ).text() == "13"){
        fill = "#b92325";
    }
    else if( $( "#number20 option:selected" ).text() == "14"){
        fill = "#b12224";
    }
    else if( $( "#number20 option:selected" ).text() == "15"){
        fill = "#a01f21";
    }
    else if( $( "#number20 option:selected" ).text() == "16"){
        fill = "#931c1d";
    }
    else if( $( "#number20 option:selected" ).text() == "17"){
        fill = "#821718";
    }
    else if( $( "#number20 option:selected" ).text() == "18"){
        fill = "#711211";
    }
    else if( $( "#number20 option:selected" ).text() == "19"){
        fill = "#620e10";
    }
    else if( $( "#number20 option:selected" ).text() == "20"){
        fill = "#541212";
    }     
    
    box20Rect.setFill(fill);
    layer.draw();
    stage.add(layer);
    
});

// ---------------------- Scoring Function ---------------------- //
var finalScore = document.getElementById("finalScore")
var score = 0;

function scoreFunction() {
    score = 0;
    
    if( $( "#number1 option:selected" ).text() == "1"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number2 option:selected" ).text() == "2"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    
    if( $( "#number3 option:selected" ).text() == "3"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number4 option:selected" ).text() == "4"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number5 option:selected" ).text() == "5"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number6 option:selected" ).text() == "6"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number7 option:selected" ).text() == "7"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number8 option:selected" ).text() == "8"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number9 option:selected" ).text() == "9"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number10 option:selected" ).text() == "10"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number11 option:selected" ).text() == "11"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number12 option:selected" ).text() == "12"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number13 option:selected" ).text() == "13"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number14 option:selected" ).text() == "14"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number15 option:selected" ).text() == "15"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number16 option:selected" ).text() == "16"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number17 option:selected" ).text() == "17"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number18 option:selected" ).text() == "18"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number19 option:selected" ).text() == "19"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    if( $( "#number20 option:selected" ).text() == "20"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    
    var scoreFinal = score.toString();
    finalScore.innerHTML = scoreFinal;
}