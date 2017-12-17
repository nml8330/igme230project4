var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();
stage.add(layer);

var tempLayer = new Konva.Layer();
stage.add(tempLayer);

var text = new Konva.Text({
    fill : 'black'
});
layer.add(text);

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
    name: "box1",
    x: 0,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box2",
    x: 100,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box3",
    x: 200,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box4",
    x: 300,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box5",
    x: 400,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box6",
    x: 500,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box7",
    x: 600,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box8",
    x: 700,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box9",
    x: 800,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box10",
    x: 900,
    y: 50,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box11",
    x: 0,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box12",
    x: 100,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box13",
    x: 200,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box14",
    x: 300,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box15",
    x: 400,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box16",
    x: 500,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box17",
    x: 600,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box18",
    x: 700,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box19",
    x: 800,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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
    name: "box20",
    x: 900,
    y: 180,
    width: 75,
    height: 75,
    fill: 'white',
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

layer.draw();


// ---------------------- Creating Colors in Box Bank ---------------------- //
var red1Group = new Konva.Group({
    name: "red1",
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
    name: "red2",
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
    name: "red3",
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
    name: "red4",
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
    name: "red5",
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
    name: "red6",
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
    name: "red7",
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
    name: "red8",
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
    name: "red9",
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
    name: "red10",
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
    name: "red11",
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
    name: "red12",
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
    name: "red13",
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
    name: "red14",
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
    name: "red15",
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
    name: "red16",
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
    name: "red17",
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
    name: "red18",
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
    name: "red19",
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
    name: "red20",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red1Rect = new Konva.Rect({
    name: "red1",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red2Rect = new Konva.Rect({
    name: "red2",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red3Rect = new Konva.Rect({
    name: "red3",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red4Rect = new Konva.Rect({
    name: "red4",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red5Rect = new Konva.Rect({
    name: "red5",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red6Rect = new Konva.Rect({
    name: "red6",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red7Rect = new Konva.Rect({
    name: "red7",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red8Rect = new Konva.Rect({
    name: "red8",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red9Rect = new Konva.Rect({
    name: "red9",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red10Rect = new Konva.Rect({
    name: "red10",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red11Rect = new Konva.Rect({
    name: "red11",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red12Rect = new Konva.Rect({
    name: "red12",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red13Rect = new Konva.Rect({
    name: "red13",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red14Rect = new Konva.Rect({
    name: "red14",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red15Rect = new Konva.Rect({
    name: "red15",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red16Rect = new Konva.Rect({
    name: "red16",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red17Rect = new Konva.Rect({
    name: "red17",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red18Rect = new Konva.Rect({
    name: "red18",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red19Rect = new Konva.Rect({
    name: "red19",
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
    width: 75,
    align: 'center',
    fill: 'white',
    padding: 10
});

var red20Rect = new Konva.Rect({
    name: "red20",
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
red20Group.add(red20Rect).add(red20Text)

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

layer.draw();

// add the layer to the stage
stage.add(layer);

function layeringBoxes() {
    tempLayer.moveToTop();
    layer.draw();
}

// ---------------------- Color Changing Function ---------------------- //
var currentlyDragging = "";

stage.on("dragstart", function(e){
    e.target.moveTo(tempLayer);
    currentlyDragging = e.target.name();
    layer.draw();
});


var previousShape;
stage.on("dragmove", function(evt){
    var pos = stage.getPointerPosition();
    var shape = layer.getIntersection(pos);
    if (previousShape && shape) {
        if (previousShape !== shape) {
            // leave from old targer
            previousShape.fire('dragleave', {
                type : 'dragleave',
                target : previousShape,
                evt : evt.evt
            }, true);

            // enter new targer
            shape.fire('dragenter', {
                type : 'dragenter',
                target : shape,
                evt : evt.evt
            }, true);
            previousShape = shape;
        } else {
            previousShape.fire('dragover', {
                type : 'dragover',
                target : previousShape,
                evt : evt.evt
            }, true);
        }
    } else if (!previousShape && shape) {
        previousShape = shape;
        shape.fire('dragenter', {
            type : 'dragenter',
            target : shape,
            evt : evt.evt
        }, true);
    } else if (previousShape && !shape) {
        previousShape.fire('dragleave', {
            type : 'dragleave',
            target : previousShape,
            evt : evt.evt
        }, true);
        previousShape = undefined;
    }
});

stage.on("dragend", function(e){
    var pos = stage.getPointerPosition();
    var shape = layer.getIntersection(pos);
    if (shape) {
        previousShape.fire('drop', {
            type : 'drop',
            target : previousShape,
            evt : e.evt
        }, true);
    }
    previousShape = undefined;
    e.target.moveTo(layer);
    layer.draw();
    tempLayer.draw();
});

stage.on("dragenter", function(e){
    layer.draw();
});

stage.on("dragover", function(e){
    layer.draw();
});

var fillColor = "white";
stage.on("drop", function(e){
    if( e.target.name() == "red1" ||
        e.target.name() == "red2" ||
        e.target.name() == "red3" ||
        e.target.name() == "red4" ||
        e.target.name() == "red5" ||
        e.target.name() == "red6" ||
        e.target.name() == "red7" ||
        e.target.name() == "red8" ||
        e.target.name() == "red9" ||
        e.target.name() == "red10" ||
        e.target.name() == "red11" ||
        e.target.name() == "red12" ||
        e.target.name() == "red13" ||
        e.target.name() == "red14" ||
        e.target.name() == "red15" ||
        e.target.name() == "red16" ||
        e.target.name() == "red17" ||
        e.target.name() == "red18" ||
        e.target.name() == "red19" ||
        e.target.name() == "red20"){
            return;
        }
    else{
        if(currentlyDragging == "red1"){
            fillColor = "#f48686";
        }
        else if(currentlyDragging == "red2"){
            fillColor = "#f37b7c";
        }
        else if(currentlyDragging == "red3"){
            fillColor = "#f27475";
        }
        else if(currentlyDragging == "red4"){
            fillColor = "#f16a6b";
        }
        else if(currentlyDragging == "red5"){
            fillColor = "#f05d5e";
        }
        else if(currentlyDragging == "red6"){
            fillColor = "#ef5a59";
        }
        else if(currentlyDragging == "red7"){
            fillColor = "#ef5050";
        }
        else if(currentlyDragging == "red8"){
            fillColor = "#ec494a";
        }
        else if(currentlyDragging == "red9"){
            fillColor = "#ec403f";
        }
        else if(currentlyDragging == "red10"){
            fillColor = "#ed1f24";
        }
        else if(currentlyDragging == "red11"){
            fillColor = "#e31e25";
        }
        else if(currentlyDragging == "red12"){
            fillColor = "#d22227";
        }
        else if(currentlyDragging == "red13"){
            fillColor = "#b92325";
        }
        else if(currentlyDragging == "red14"){
            fillColor = "#b12224";
        }
        else if(currentlyDragging == "red15"){
            fillColor = "#a01f21";
        }
        else if(currentlyDragging == "red16"){
            fillColor = "#931c1d";
        }
        else if(currentlyDragging == "red17"){
            fillColor = "#821718";
        }
        else if(currentlyDragging == "red18"){
            fillColor = "#711211";
        }
        else if(currentlyDragging == "red19"){
            fillColor = "#620e10";
        }
        else if(currentlyDragging == "red20"){
            fillColor = "#541212";
        }
    }
    e.target.fill(fillColor);
});

// ---------------------- Scoring Function ---------------------- //

var finalScore = document.getElementById("finalScore")
var score = 0;

function scoreFunction() {
    score = 0;
    
    if(box1Rect.fillStyle == "f48686"){
        score = score + 1;
    }
    else{
        score = score + 0;
    }
    
    var scoreFinal = score.toString();
    finalScore.innerHTML = scoreFinal;
}