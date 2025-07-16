import qrcode

url = "https://shadow-fox-user-verification.vercel.app/"
qr = qrcode.make(url)
qr.save("qr.png")
