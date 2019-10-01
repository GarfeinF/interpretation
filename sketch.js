function setup() {
	createCanvas(475, 800)
	
	angleMode(DEGREES)
	noStroke()

	//001
	fill(187)
	beginShape()
		vertex(36, 29)
		vertex(58, 34)
		vertex(43, 38)
		vertex(35, 36)
		vertex(36, 29)
	endShape()

	//002
	fill(161)
	beginShape()
		vertex(35, 36)
		vertex(43, 38)
		vertex(26, 43)
		vertex(26, 37)
		vertex(35, 36)
	endShape()

	//003
	fill(170)
	beginShape()
		vertex(26, 43)
		vertex(46, 50)
		vertex(22, 52)
		vertex(21, 49)
		vertex(26, 43)
	endShape()

	//004
	fill(150)
	beginShape()
		vertex(22, 52)
		vertex(41, 59)
		vertex(18, 59)
		vertex(18, 54)
		vertex(22, 52)
	endShape()

	//020
	fill(11)
	beginShape()
		vertex(18, 59)
		vertex(45, 77)
		vertex(40, 80)
		vertex(16, 66)
		vertex(18, 59)
	endShape()

	//021
	fill(133)
	beginShape()
		vertex(16, 66)
		vertex(40, 80)
		vertex(18, 89)
		vertex(14, 94)
		vertex(16, 66)
	endShape()

	//022
	fill(30)
	beginShape()
		vertex(14, 94)
		vertex(18, 89)
		vertex(17, 96)
		vertex(22, 98)
		vertex(15, 98)
		vertex(14, 94)
	endShape()

	//024
	fill(186)
	beginShape()
		vertex(15, 98)
		vertex(35, 118)
		vertex(55, 126)
		vertex(28, 126)
		vertex(15, 98)
	endShape()

	//026
	fill(194)
	beginShape()
		vertex(28, 126)
		vertex(71, 126)
		vertex(55, 145)
		vertex(28, 126)
	endShape()

	//035
	fill(116)
	beginShape()
		vertex(109, 98)
		vertex(95, 80)
		vertex(123, 94)
		vertex(144, 118)
		vertex(109, 98)
	endShape()

	//036
	fill(155)
	beginShape()
		vertex(125, 125)
		vertex(90, 96)
		vertex(122, 112)
		vertex(129, 119)
		vertex(125, 125)
	endShape()

	//037
	fill(14)
	beginShape()
		vertex(129, 119)
		vertex(109, 98)
		vertex(132, 111)
		vertex(129, 119)
	endShape()


	//038
	fill(170)
	beginShape()
		vertex(55, 145)
		vertex(71, 126)
		vertex(98, 129)
		vertex(87, 151)
		vertex(55, 145)
	endShape()

	//039
	fill(187)
	beginShape()
		vertex(98, 129)
		vertex(108, 143)
		vertex(87, 151)
		vertex(98, 129)
	endShape()

	//040
	fill(217)
	beginShape()
		vertex(108, 143)
		vertex(125, 125)
		vertex(87, 151)
		vertex(108, 143)
	endShape()

	//043
	fill(27)
	beginShape()
		vertex(123, 94)
		vertex(144, 118)
		vertex(168, 120)
		vertex(123, 94)
	endShape()









}

function mouseClicked(){
	print(int(mouseX), int(mouseY))
}
