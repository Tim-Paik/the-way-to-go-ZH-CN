(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{425:function(t,s,e){"use strict";e.r(s);var n=e(33),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_11-8-第二个例子：读和写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-8-第二个例子：读和写"}},[t._v("#")]),t._v(" 11.8 第二个例子：读和写")]),t._v(" "),e("p",[t._v("读和写是软件中很普遍的行为，提起它们会立即想到读写文件、缓存（比如字节或字符串切片）、标准输入输出、标准错误以及网络连接、管道等等，或者读写我们的自定义类型。为了让代码尽可能通用，Go 采取了一致的方式来读写数据。")]),t._v(" "),e("p",[e("code",[t._v("io")]),t._v(" 包提供了用于读和写的接口 "),e("code",[t._v("io.Reader")]),t._v(" 和 "),e("code",[t._v("io.Writer")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Reader "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Writer "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("只要类型实现了读写接口，提供 "),e("code",[t._v("Read()")]),t._v(" 和 "),e("code",[t._v("Write")]),t._v(" 方法，就可以从它读取数据，或向它写入数据。一个对象要是可读的，它必须实现 "),e("code",[t._v("io.Reader")]),t._v(" 接口，这个接口只有一个签名是 "),e("code",[t._v("Read(p []byte) (n int, err error)")]),t._v(" 的方法，它从调用它的对象上读取数据，并把读到的数据放入参数中的字节切片中，然后返回读取的字节数和一个 "),e("code",[t._v("error")]),t._v(" 对象，如果没有错误发生返回 "),e("code",[t._v("nil")]),t._v("，如果已经到达输入的尾端，会返回 "),e("code",[t._v('io.EOF("EOF")')]),t._v("，如果读取的过程中发生了错误，就会返回具体的错误信息。类似地，一个对象要是可写的，它必须实现 "),e("code",[t._v("io.Writer")]),t._v(" 接口，这个接口也只有一个签名是 "),e("code",[t._v("Write(p []byte) (n int, err error)")]),t._v(" 的方法，它将指定字节切片中的数据写入调用它的对象里，然后返回实际写入的字节数和一个 "),e("code",[t._v("error")]),t._v(" 对象（如果没有错误发生就是 "),e("code",[t._v("nil")]),t._v("）。")]),t._v(" "),e("p",[e("code",[t._v("io")]),t._v(" 包里的 "),e("code",[t._v("Readers")]),t._v(" 和 "),e("code",[t._v("Writers")]),t._v(" 都是不带缓冲的，"),e("code",[t._v("bufio")]),t._v(" 包里提供了对应的带缓冲的操作，在读写 "),e("code",[t._v("UTF-8")]),t._v(" 编码的文本文件时它们尤其有用。在 第12章 我们会看到很多在实战中使用它们的例子。")]),t._v(" "),e("p",[t._v("在实际编程中尽可能的使用这些接口，会使程序变得更通用，可以在任何实现了这些接口的类型上使用读写方法。")]),t._v(" "),e("p",[t._v("例如一个 "),e("code",[t._v("JPEG")]),t._v(" 图形解码器，通过一个 "),e("code",[t._v("Reader")]),t._v(" 参数，它可以解码来自磁盘、网络连接或以 "),e("code",[t._v("gzip")]),t._v(" 压缩的 "),e("code",[t._v("HTTP")]),t._v(" 流中的 "),e("code",[t._v("JPEG")]),t._v(" 图形数据，或者其他任何实现了 "),e("code",[t._v("Reader")]),t._v(" 接口的对象。")])])}),[],!1,null,null,null);s.default=a.exports}}]);