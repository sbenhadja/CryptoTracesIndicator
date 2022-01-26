//@version=4
//--------------------------------------------------------------------------------
//	MIT License

//	Copyright (c) 2022 MontreNous

//	Permission is hereby granted, free of charge, to any person obtaining a copy
//	of this software and associated documentation files (the "Software"), to deal
//	in the Software without restriction, including without limitation the rights
//	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//	copies of the Software, and to permit persons to whom the Software is
//	furnished to do so, subject to the following conditions:
//
//	The above copyright notice and this permission notice shall be included in all
//	copies or substantial portions of the Software.

//	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//	SOFTWARE.
//------------------------------------------------------------------------------------

//------------------ Contact us ----------------------
//Email: s.benhadja@hotmail.com
//Tradingview: https://www.tradingview.com/u/CryptoTraces/
//---------------------------------------------------------

study(title="CryptoTraces EMA cross indicator ", shorttitle="CryptoTraces EMA cross indicator", overlay=true)
len1 = input(12, minval=1, title="Shortest EMA")
len2 = input(25, minval=1, title="Short EMA")
len3 = input(50, minval=1, title="Medium EMA")
len4 = input(100, minval=1, title="Long EMA")
len5 = input(150, minval=1, title="Longger EMA")
len6 = input(200, minval=1, title="Longgest EMA")

src1 = input(close, title="Shortest Source")
src2 = input(close, title="Short Source")
src3 = input(close, title="Medium Source")
src4 = input(close, title="Long Source")
src5 = input(close, title="Longger Source")
src6 = input(close, title="Longgest Source")

ema1 = ema(src1, len1)
ema2 = ema(src2, len2)
ema3 = ema(src3, len3)
ema4 = ema(src4, len4)
ema5 = ema(src5, len5)
ema6 = ema(src6, len6)

plot(ema1, color=color.new(color.blue,0), linewidth=2, title="Shortest EMA")
p1 = plot(ema2, color=color.new(color.yellow,0), linewidth=2, title="Short EMA", display=0)
p2 = plot(ema3, color=color.new(color.orange,0), linewidth=2, title="Medium EMA", display=0)
plot(ema4, color=color.new(color.red,0), linewidth=2, title="Long EMA")
plot(ema5, color=color.new(color.yellow,0), linewidth=2, title="Longger EMA")
plot(ema6, color=color.new(color.green,0), linewidth=2, title="Longgest EMA")

fill(p1, p2, color = ema2> ema3? color.new(color.green,50) : color.new(color.red,50))

longCondition = crossover(ema2, ema3)
shortCondition = crossunder(ema2, ema3)

plotshape(longCondition, title = "Buy Signal", style=shape.triangleup, size = size.small, location=location.belowbar, color=color.new(color.green,0))
plotshape(shortCondition, title = "Sell Signal", style=shape.triangledown, size = size.small, location=location.abovebar, color =  color.new(color.red,0))
