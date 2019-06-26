(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},106:function(e,t){},141:function(e,t){},142:function(e,t){},189:function(e,t,i){"use strict";i.r(t);var a=i(0),u=i.n(a),o=i(83),s=i.n(o),n=i(84),r=i(15),l=i(16),m=i(18),d=i(17),c=i(19),p=i(32),h=i.n(p),v=function(e){var t=e.handlePrevPage,i=e.handleNextPage;return u.a.createElement("div",{className:h.a.controls},u.a.createElement("button",{type:"button",className:h.a.button,onClick:t},"\u041d\u0430\u0437\u0430\u0434"),u.a.createElement("button",{type:"button",className:h.a.button,onClick:i},"\u0412\u043f\u0435\u0440\u0435\u0434"))},q=i(85),g=i.n(q),b=function(e){var t=e.pagesCount,i=e.currentPage;return u.a.createElement("div",{className:g.a.counter},u.a.createElement("div",null,i," /",t))},f=i(86),w=i.n(f);var y=function(e){return u.a.createElement("article",{className:w.a.publication},u.a.createElement("h2",null,e.title),u.a.createElement("p",null,e.text))},E={set:function(e){localStorage.setItem("activePublication",String(e))},get:function(){return Number(localStorage.getItem("activePublication"))}},x=0,k=function(e){function t(e){var i;Object(r.a)(this,t),(i=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleNextPage=function(){i.setState(function(e,t){var i=e.currentPage+1;if(!(i>t.publications.length-1))return E.set(i),{currentPage:i,activePublication:t.publications[i]}})},i.handlePrevPage=function(){i.setState(function(e,t){var i=e.currentPage-1;if(!(i<=-1))return E.set(i),{currentPage:i,activePublication:t.publications[i]}})};var a=E.get()||x;return i.state={activePublication:e.publications[a],currentPage:a},i}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.publications.length,t=this.state,i=t.activePublication,a=i.title,o=i.text,s=t.currentPage;return u.a.createElement("div",{className:"reader"},u.a.createElement(y,{title:a,text:o}),u.a.createElement(b,{pagesCount:e,currentPage:s+1}),u.a.createElement(v,{handlePrevPage:this.handlePrevPage,handleNextPage:this.handleNextPage}))}}]),t}(u.a.Component),A=i(87),C=i.n(A),N=function(e){var t=e.inputValue,i=e.onInputChange;return u.a.createElement(u.a.Fragment,null,u.a.createElement("input",{type:"text",className:C.a.input,value:t,onChange:i}))},j=i(26),U=i.n(j),D=function(e){var t=e.title,i=e.posterUrl,a=e.overview;return u.a.createElement("div",{className:U.a.movieCard},u.a.createElement("img",{src:i,alt:t}),u.a.createElement("div",{className:U.a.content},u.a.createElement("h2",{className:U.a.title},t.substring(28,-10)),u.a.createElement("p",{className:U.a.descr},a.substring(120,-20),"...")))},_=i(88),S=i.n(_),I=function(e){var t=e.items,i=void 0===t?[]:t;return i.length>0?u.a.createElement(u.a.Fragment,null,u.a.createElement("ul",{className:S.a.movieGrid},i.map(function(e){return u.a.createElement("li",{key:e.id},u.a.createElement(D,{posterUrl:e.posterUrl,title:e.title,overview:e.overview}))}))):u.a.createElement("p",null,"No matching results!")},M=i(89),P=i.n(M),Q=i(90);var V=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).handleInput=function(t){e.setState({searchValue:t.target.value})},e.state={searchValue:""},e}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.searchValue,t=function(e,t){return e.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())})}(Q,e);return u.a.createElement("div",{className:P.a.containerFilm},u.a.createElement(N,{inputValue:e,onInputChange:this.handleInput}),u.a.createElement(I,{items:t}))}}]),t}(u.a.Component),O=i(46),L=i(6),T=i.n(L),B=function(e){var t=e.onInputChange,i=e.deposit,a=e.withdraw,o=e.resetForm;return u.a.createElement("section",{className:T.a.controls},u.a.createElement("input",{type:"number",className:T.a.input,onChange:t,value:o}),u.a.createElement("button",{type:"submit",className:T.a.button,name:"deposit",onClick:i},"Deposit"),u.a.createElement("button",{type:"button",className:T.a.button,name:"withdraw",onClick:a},"Withdraw"))},W=function(e){var t=e.balance,i=e.deposit,a=e.withdraw;return u.a.createElement("section",{className:T.a.balance},u.a.createElement("span",{className:T.a.deposite},"\u2b06 ",i,"$"),u.a.createElement("span",{className:T.a.withdraw},"\u2b07 ",a,"$"),u.a.createElement("span",null,"Balance: ",t,"$"))},R=function(e){var t=e.history,i=void 0===t?[]:t;return u.a.createElement("table",{className:T.a.history},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Transaction"),u.a.createElement("th",null,"Amount"),u.a.createElement("th",null,"Date"))),u.a.createElement("tbody",null,i.map(function(e){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,e.type),u.a.createElement("td",null,e.amount),u.a.createElement("td",null,e.date))})))},G=i(91),F=i.n(G),H=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).handleInput=function(t){t.preventDefault(),0!==Number(t.target.value)?e.setState({valueInput:t.target.value}):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},e.createNewOperation=function(t){var i=(new Date).toLocaleDateString();return{id:F.a.generate(),type:t,amount:e.state.valueInput,date:i}},e.handleCkickDeposit=function(){var t=e.createNewOperation("Deposit");e.setState(function(e){return{history:[t].concat(Object(O.a)(e.history)),deposit:e.deposit+=Number(t.amount),balance:e.balance+=Number(t.amount),valueInput:""}})},e.handleCkickWithdraw=function(){var t=e.createNewOperation("Withdraw");e.setState(function(i){if(e.state.balance>=e.state.valueInput)return{balance:i.balance-=Number(t.amount),valueInput:"",history:[t].concat(Object(O.a)(i.history)),withdraw:i.withdraw+=Number(t.amount)};alert("\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0434\u043b\u044f \u0441\u043d\u044f\u0442\u0438\u044f")})},e.state={history:[],balance:0,deposit:0,withdraw:0,valueInput:""},e}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.history,i=e.balance,a=e.deposit,o=e.withdraw,s=e.valueInput;return u.a.createElement("div",{className:T.a.dashboard},u.a.createElement(B,{onInputChange:this.handleInput,deposit:this.handleCkickDeposit,withdraw:this.handleCkickWithdraw,resetForm:s}),u.a.createElement(W,{balance:i,deposit:a,withdraw:o}),u.a.createElement(R,{history:t}))}}]),t}(u.a.Component),z=function(){return u.a.createElement("div",null,u.a.createElement(k,{publications:n}),u.a.createElement(V,null),u.a.createElement(H,null))};s.a.render(u.a.createElement(z,null),document.querySelector("#root"))},26:function(e,t,i){e.exports={movieCard:"MovieCard_movieCard__1q0nI",content:"MovieCard_content__2RhP4",title:"MovieCard_title__2wmqo",descr:"MovieCard_descr__2DsvU"}},32:function(e,t,i){e.exports={controls:"Controls_controls__2i-V9",button:"Controls_button__3U8bg"}},6:function(e,t,i){e.exports={dashboard:"style_dashboard__3A3v0",controls:"style_controls__2Rw9j",button:"style_button__Oqd-E",input:"style_input__vmjHi",balance:"style_balance__VPYRw",indicators:"style_indicators__2L0py",deposite:"style_deposite__309Co",withdraw:"style_withdraw__i_nMF",history:"style_history__2e2O9",head:"style_head__3J1Be",tableCells:"style_tableCells__m5vyk",body:"style_body__3WwaA",row:"style_row__19ICC",transactionName:"style_transactionName__Qpj8L"}},84:function(e){e.exports=[{id:"4db49f19-9aa2-4faf-9862-a97efaefd21c",title:"Voluptatum sunt quod aut quaerat quae recusandae hic.",text:"Ut quis culpa quam eos sunt. Nam et autem et sit. Quas accusantium est dolorem temporibus. In modi consequuntur sed nihil. Aut et ea accusantium aut tenetur et. Itaque temporibus temporibus. Rerum ut provident. Maxime qui est aut. Sit fugiat qui ullam. Dolorem non officia amet consequatur veritatis soluta mollitia molestias recusandae. Nostrum consequatur voluptates est vel libero. Velit magni voluptas ullam delectus. Aut laboriosam harum eius numquam est blanditiis sequi nihil. Sit et id pariatur rerum sit vero. Aspernatur ea quo animi similique debitis labore nesciunt quod ex. Similique deleniti in dolorum perspiciatis asperiores consequuntur dignissimos qui. Sit ut aut ex iusto ut dolor omnis. Doloribus similique omnis numquam mollitia tempore. Veniam ea officia quasi consequuntur placeat quam a. Eligendi sapiente et facere voluptatem. Rerum autem ipsam nihil. Iusto voluptatibus ut dolor et voluptatibus eaque adipisci. Itaque quod nesciunt sapiente. Incidunt at tempore nihil molestiae esse nulla. Et repudiandae cumque enim dolor."},{id:"b618b4c0-c47f-44df-9c1a-955b775d6b2f",title:"Incidunt ipsam nemo recusandae est officiis eos laboriosam.",text:"Natus veniam perferendis accusantium praesentium iure qui molestias rerum. Enim perspiciatis adipisci dolor. Qui labore ea deserunt laborum blanditiis. Est odio rerum sunt. Qui aut aspernatur molestiae illo nesciunt excepturi tempore accusantium. Ipsam ratione et optio odit. Quidem et dolores aut aut earum dolorem sed magnam. In aut aut voluptatem vitae. Quidem voluptatum dolorum voluptas a et. Aut qui dolore nemo voluptates nihil quidem sequi amet. Eum dolorem est ut vel voluptate ad. Sit qui voluptate sunt iste ipsum iure dolores. Molestiae expedita accusamus facere saepe et neque quia. Vel aliquam autem totam accusantium laborum vel aperiam quisquam enim. Saepe doloremque doloremque adipisci voluptas nihil et. Reiciendis quis ut aut. Doloremque eius nostrum rerum quaerat nulla labore. Autem quaerat minus. Iusto consequatur exercitationem est cum facere culpa hic. Dolor deserunt necessitatibus. Cumque quis dolorem aut et a sint ut vel nulla. Occaecati dicta aliquam est. Quo aliquam eum tempore itaque. Blanditiis odio accusantium voluptatem voluptas. Vel ex at in incidunt tempora blanditiis ut. Facilis aut et ducimus consequuntur aperiam. Eveniet repellat aliquam aut quia labore dolores non eius est. Totam qui facere quaerat deleniti qui vel quos. Beatae maxime quo placeat. Eum sit vel iusto."},{id:"822c3b86-b423-425c-8be8-40fe06da3fd5",title:"Ullam facere accusamus qui qui asperiores nihil corporis in.",text:"Qui aspernatur eum quibusdam enim reprehenderit doloribus molestiae est dolorum. Veritatis non nihil. Beatae nemo sit esse quas enim ut. Sed consequatur sit molestias sequi minus perspiciatis aliquid voluptates sed. Harum natus ea qui et sed. Velit qui consectetur et quisquam optio iste similique mollitia blanditiis. Quos iusto at voluptatum explicabo unde voluptas excepturi sit. Ad distinctio non aut unde at. Saepe omnis eos id corrupti ducimus. Id adipisci blanditiis et saepe quia. Voluptas iste vel et error est. Aut architecto qui dolor qui voluptas. Qui et consequatur distinctio. Odio ut est aut autem cum iste voluptatum. Esse minus et nesciunt dolore labore voluptatem cumque. Iste qui maxime dolores officia aliquid aut iusto possimus sit. Voluptatum earum consequatur velit necessitatibus sequi repellat mollitia aut quis. In reprehenderit totam quo sit. Ut deleniti sequi voluptas sunt voluptatem qui voluptatem nobis libero. Ullam vero velit doloremque ipsum sint culpa. Reiciendis corporis saepe quibusdam exercitationem molestias veniam. Id natus temporibus qui facilis libero voluptatem occaecati aut voluptatum. Voluptatem quos quos. Molestiae molestiae dolorum voluptatem aliquam voluptas. Dolorem doloribus qui ut. Perspiciatis vero exercitationem ut placeat eos et reprehenderit et."},{id:"5566f7c3-aeb8-4601-a4fb-68e3dce0b4eb",title:"Exercitationem rem praesentium qui voluptatem.",text:"Placeat repudiandae id totam praesentium fugiat. Cumque sint eos laudantium laudantium ut qui illo expedita qui. Velit fuga ut vel eos quaerat qui architecto voluptas. Doloribus voluptatem minima sunt voluptate rerum aut. Consequuntur nostrum quia laborum quis alias facilis velit. Aut ullam harum est facilis recusandae molestiae sit et. Sed adipisci facere quasi iusto autem. Ut repellendus voluptas itaque sit. Minima ad asperiores itaque aut non blanditiis consectetur odit. Adipisci eum maiores sunt tempore molestiae. Perferendis atque sapiente rerum cum officiis. Ut repellat aliquid eum quia et. Incidunt fugit rerum quia consequatur vel. Vel dolor sint qui nihil. Dolor iste et aut eum dolores est. Incidunt atque quo delectus perferendis voluptatem et. Aut sint ut aut natus neque necessitatibus aut doloribus sit. Iusto quos eum. Qui sunt velit similique. Id ducimus enim molestias et quam ut distinctio at aliquam. Qui qui voluptatum pariatur explicabo. Officia nesciunt laudantium veniam voluptatem debitis. Omnis est assumenda qui molestias praesentium. Fugiat perferendis dolores consectetur. Nisi veniam quod dolorem quia. Sit blanditiis dolor. Consectetur corporis ducimus alias rem. Expedita dolores molestiae. Consequatur nemo consequatur eius unde incidunt tempore eius. Ullam reiciendis molestiae doloremque ea. Est est qui et voluptatem recusandae ut ut voluptas in."},{id:"1727422f-28cd-472e-9dac-2583e44aa608",title:"Magni nulla dolor aperiam.",text:"Similique perspiciatis accusantium autem deserunt sed consequuntur molestiae aperiam commodi. Quis impedit et est eos sit est voluptate. Error voluptatem est iure nobis quisquam amet ipsa. Consequatur quo eveniet sequi. Voluptatem vel et aperiam accusantium aliquid est nihil. Dolorem voluptatibus repudiandae. Rerum nisi consequatur omnis explicabo. Est impedit deserunt et facilis quidem. Aut aperiam expedita ducimus consequuntur rem quod voluptatibus unde. Similique nobis quisquam sint. Sed voluptatem omnis quis cupiditate praesentium qui mollitia. Ad deserunt saepe. Deserunt rerum maxime a soluta. Dolorum vitae et repellendus possimus ad quam magni iste. Nihil amet aperiam id rerum exercitationem officiis. Corrupti et harum quidem quaerat dicta officia ipsam nostrum dolor. Est pariatur quis et et. Eum repudiandae voluptatem. Et error fugit quam. Tempore expedita sunt recusandae. Eos aut sed magnam. Totam eum quibusdam eum. Et eum sunt modi ut corrupti."},{id:"a3d0256d-2f5f-4d43-9057-f16be10abd18",title:"Rem commodi possimus vero accusamus doloribus.",text:"Est ea error voluptatem atque in eos et illo temporibus. Quidem quis dolor sint. Voluptatibus dicta aliquam eum fugiat aperiam ullam minima distinctio rerum. Alias at accusamus ratione soluta est magni voluptatem a ipsa. Ducimus minus ullam nulla aliquam ipsa et sit non est. Accusamus quo et porro. Similique illum voluptatem quo repellat officia occaecati. Eos cumque nisi qui reprehenderit sed aut architecto. Numquam quisquam quia. Numquam ad ea neque atque atque iusto. Aut aliquam tempore tenetur reiciendis atque provident reprehenderit architecto aliquid. Dolor facere maiores ullam doloremque accusamus. Et voluptate sit animi minima numquam libero possimus ut vel. Dolorum consequatur earum eos. Maxime unde dignissimos iste eos assumenda. Et veritatis ut est similique ullam qui voluptas sunt. Pariatur exercitationem consectetur. Qui quo quam libero optio. Ut vel eos aut ratione nisi. Exercitationem aliquid voluptates consectetur est aut vel est inventore. Illo doloribus autem ipsa quisquam et possimus. Neque voluptatibus tenetur tenetur fugiat dolores cum dolore. Ut molestiae quam earum sint consequuntur voluptatem quo modi nulla. Odit perferendis provident provident ab rerum saepe facere. Atque consectetur voluptatem itaque. Maxime doloribus autem molestiae. Quaerat asperiores occaecati temporibus quo officiis incidunt ut explicabo in."},{id:"1237a539-121d-4249-9652-ef9d26a3d8d5",title:"Quo qui officia assumenda culpa vel laborum voluptas provident.",text:"Quo fuga non voluptatum doloremque quidem. Unde sequi aliquid tempore et placeat vero dolorum temporibus maxime. Necessitatibus dolor quia nihil in. Quaerat rerum veniam excepturi. Quae corrupti ratione repellendus et mollitia. Ipsa accusamus similique vel deleniti suscipit. Aut corporis eveniet. Veritatis sint sed. Eum commodi molestias atque et pariatur tempora necessitatibus. Vero voluptas fugiat. Nemo quis tenetur fuga soluta. In mollitia aliquam. Magnam voluptates qui rerum illo qui distinctio iusto. Provident ex totam. Asperiores est illum. Blanditiis sint rem repellendus qui qui. Consectetur dolores ut. Eius commodi officia consequatur adipisci est. Ducimus omnis ducimus. Unde cupiditate et reprehenderit quae possimus. Est hic optio quam rerum dignissimos aliquam. At voluptas voluptatum velit dolor. Qui quisquam animi odit. Animi quo ad quia et. Nesciunt omnis sed delectus modi aut nostrum mollitia quam. Pariatur et et impedit voluptates."},{id:"28ef6c3e-6ec1-4d04-8bb9-055ff06fe6c1",title:"Et voluptate explicabo et rem velit molestiae tempore qui deleniti.",text:"Ut facere et repudiandae quod ut quia saepe fuga. Veniam sit velit id aperiam est neque veniam id. Reiciendis consequatur est. Maxime modi minima asperiores assumenda cum ratione. Maxime totam odio. Molestiae harum eaque sequi debitis aut quidem. Aut est qui. Pariatur accusantium aut eaque nam asperiores. Aut in aut cumque sit adipisci voluptatem animi amet qui. Adipisci minima tempora totam id ut iure molestiae dolores illum. Vel dolor a non. Voluptate soluta assumenda occaecati veniam quas ipsa sit. Voluptatem consequatur et molestias cumque et. Officiis quisquam consequatur. Nam quos eos. Totam enim excepturi dolores. Vel quia et praesentium tenetur totam. Eum dolorum quae animi dicta cum dolores sed magnam. Suscipit ducimus consequatur ut sed dolorem recusandae. Esse quasi sed quam accusamus accusamus dolor veniam voluptas sunt. Qui exercitationem et vel magnam tempore recusandae nam. Aut cum eos qui voluptas hic sint eveniet dolore non. Consequuntur nobis facilis repudiandae similique sit animi et optio. Eum dicta qui praesentium id ut. Ducimus quisquam dolores. Ullam minima consequatur odit rerum voluptatem sed veniam quod laudantium. Provident voluptatem dolorum et. Praesentium similique quaerat. Distinctio itaque et itaque est. Aut tempore nihil animi cumque unde eligendi. Nesciunt similique nisi. Culpa facere laudantium vitae quis a voluptates velit aut. Autem officia qui nostrum est nihil qui aliquid maiores. Suscipit minus dolor in harum totam impedit ut. Et doloremque fuga provident culpa dolorem enim et. Dicta ut quo. Delectus mollitia vero. Et qui voluptatum rerum consequuntur aut laboriosam mollitia deleniti. Nostrum eum accusantium voluptatem nisi repudiandae expedita laudantium consequuntur. Labore sed hic consequatur recusandae enim a quis."},{id:"12fdd805-cd7f-4fdf-bcb7-393022a114e5",title:"Omnis vel minus.",text:"Tempore aliquid aliquid nihil. Ut incidunt culpa asperiores. Iste omnis quas voluptatem amet quos nisi dolor ut. Voluptatem ea error vero enim sunt qui nulla consequatur qui. Quia ea et ut sunt. Excepturi iste quas. Saepe eligendi sed et rerum tempore nulla est reprehenderit. Dolorem iste ipsum perferendis velit neque qui tempora. Adipisci aut repudiandae vero consectetur quia qui corporis velit. Quia et sunt sapiente fugit velit nisi enim consequatur. Qui similique eius. Modi assumenda aut vitae ipsa perferendis quia quia nesciunt. Labore quis eligendi blanditiis amet. Et et impedit et ea. Praesentium eligendi eum qui molestiae quia. Ad nisi minima deserunt perspiciatis aut perferendis et. Est officia nesciunt mollitia. Sapiente sed odit perspiciatis voluptatum. Qui pariatur laboriosam et aliquid deserunt eum consequatur minus necessitatibus. Explicabo harum maxime voluptas et nemo error vero doloremque dolorem. Laudantium quis ut ipsam quam eius. Dignissimos ea inventore id sit quod ullam qui qui. Non dicta delectus autem praesentium ut enim optio. Temporibus doloribus aut. Dicta saepe et et et placeat alias aut sunt. Iste ad corrupti nihil autem. Et ex iusto doloribus praesentium sed nihil autem ut. Iure consectetur voluptas. Ratione totam et cupiditate assumenda."},{id:"daca493c-d8c6-469b-afc6-198fe737208a",title:"Deleniti iste veritatis similique voluptate quibusdam sit.",text:"Ea et quia. Non ut doloribus autem recusandae voluptatem molestiae omnis libero. Sit et iure consequatur placeat est fugiat. Autem eius voluptas cum. Repudiandae fugiat architecto nam quos sequi amet ab facilis ipsa. Placeat commodi sint consequatur molestiae. Et quia voluptate sint laudantium veritatis commodi modi laudantium rerum. Sed sed quia minima aut ratione eveniet quo vel iste. Delectus aut ex distinctio ipsa. Ipsum magnam quaerat nesciunt officia dolor non autem. Iusto voluptatem ut debitis expedita itaque. Quae autem suscipit sint adipisci. Iste nemo et est quod molestias. Quia in facere atque mollitia deleniti neque necessitatibus et autem. Aut alias odit. Dolor illum fugiat quis qui. Ex quo eum est earum voluptatem quos maiores reprehenderit. Vitae vitae provident magni. Doloribus quas omnis soluta maxime ab eligendi sit fugit. Qui adipisci quibusdam et. Temporibus et aut quo. Nisi consequuntur adipisci illum qui in possimus. Illum omnis quod eaque perferendis."},{id:"0170e038-9f66-4744-885b-d745461f34bd",title:"Quia ullam et ut velit a impedit illo.",text:"Et eos dolor ducimus delectus. Non temporibus saepe. Atque sapiente explicabo et eos consequatur nulla. Maiores veniam quas aut natus ratione est commodi et maiores. Quod autem aut. Asperiores ut quod doloribus aut et repudiandae ut quo laborum. Sed consequuntur animi culpa consequuntur excepturi laudantium omnis quia perferendis. Ea dolorum mollitia at. Pariatur et omnis est voluptas deserunt. Et aut aut voluptatem consequatur facilis possimus. Nemo sit soluta itaque sequi accusantium. Molestiae ducimus fuga voluptas. Sapiente et id. Tenetur est ducimus sed ut voluptatibus molestiae sunt. Et debitis unde fugiat iure incidunt. Reiciendis consequatur dolores ut ut eaque eius quis reprehenderit est. Quia vel aut vero. Inventore sit inventore sint placeat labore dolorem. Temporibus aliquid quo fugiat. Cupiditate quo aut recusandae aut molestiae dolorem quia a. Nam molestiae sed sequi architecto sed. Nihil quo quas distinctio nihil omnis earum. Et maiores omnis repudiandae ea quo. Deserunt accusamus nam et. Consequuntur iusto et illum unde quam sit laboriosam et dicta. Et est doloremque ut similique explicabo est aut sit. Consequatur corrupti ad repudiandae quo odit eius voluptatem modi illo. Eum error eaque ad saepe autem voluptas nihil molestiae esse. Ut et dolor voluptatem ratione. Velit porro incidunt. Numquam nemo omnis quo et. Nisi laborum sed numquam a non soluta nobis tempore. Eaque quibusdam maiores mollitia."},{id:"9295fbbf-262d-4191-b8c1-b91e6c64898f",title:"Ducimus tenetur itaque et reiciendis.",text:"Fugit temporibus eius possimus eius unde et quia. Minima esse odio quis. Ducimus voluptas eum. Distinctio perspiciatis dolores debitis rem et qui nobis voluptate. Ipsum molestias doloribus. Doloremque quo deleniti sit. Aspernatur quia atque. Dicta sit incidunt ut. Adipisci mollitia quae qui labore iusto vero a maxime quas. Sunt error eum porro quis rerum. Qui quisquam quia voluptas velit quod. Cumque ex rem facere rerum consequatur. Delectus consequatur repellendus fugiat blanditiis optio beatae. Eligendi voluptas quia beatae tempore unde voluptas. Saepe voluptatum et velit officia expedita. Natus velit molestiae omnis quaerat aut quibusdam. Adipisci culpa reprehenderit. Saepe sint impedit aliquid error officia sint. Corrupti quaerat odit earum saepe. Nemo veritatis quas adipisci et et cumque voluptas ab. Corrupti magnam consectetur in maiores quibusdam sed quaerat aspernatur aut. Dolore voluptatum dolores sint et voluptas sed velit quia. Modi est totam cumque. Eos maxime repudiandae veritatis est numquam voluptas quo officia doloribus. Atque reiciendis ad autem deleniti. Distinctio occaecati blanditiis. Quia nostrum quis doloremque qui qui quisquam id rem quia."}]},85:function(e,t,i){e.exports={counter:"Counter_counter__1dTo2"}},86:function(e,t,i){e.exports={publication:"Publication_publication__3fxQf"}},87:function(e,t,i){e.exports={input:"SearchBar_input__28rJC"}},88:function(e,t,i){e.exports={movieGrid:"MovieGrid_movieGrid__PxIRL"}},89:function(e,t,i){e.exports={containerFilm:"AppFilms_containerFilm__XCpHf"}},90:function(e){e.exports=[{id:299534,title:"Avengers: Endgame",posterUrl:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",overview:"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."},{id:299537,title:"Captain Marvel",posterUrl:"https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",overview:"The story follows Carol Danvers as she becomes one of the universe\u2019s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe."},{id:456740,title:"Hellboy",posterUrl:"https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",overview:"Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away."},{id:299536,title:"Avengers: Infinity War",posterUrl:"https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",overview:"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."},{id:287947,title:"Shazam!",posterUrl:"https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",overview:"A boy is given the ability to become an adult superhero in times of need with a single magic word."},{id:487297,title:"What Men Want",posterUrl:"https://image.tmdb.org/t/p/w500/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg",overview:"Magically able to hear what men are thinking, a sports agent uses her newfound ability to turn the tables on her overbearing male colleagues."},{id:480414,title:"The Curse of La Llorona",posterUrl:"https://image.tmdb.org/t/p/w500/jhZlXSnFUpNiLAek9EkPrtLEWQI.jpg",overview:"A social worker dealing with the disappearance of two children fears for her own family after beginning the investigation."},{id:450465,title:"Glass",posterUrl:"https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",overview:"In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men."},{id:24428,title:"The Avengers",posterUrl:"https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",overview:"When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!"},{id:424783,title:"Bumblebee",posterUrl:"https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",overview:"On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug."},{id:376865,title:"High Life",posterUrl:"https://image.tmdb.org/t/p/w500/wElOvH7H6sLElsTOLu1MY6oWRUx.jpg",overview:"Monte and his baby daughter are the last survivors of a damned and dangerous mission to the outer reaches of the solar system. They must now rely on each other to survive as they hurtle toward the oblivion of a black hole."},{id:284054,title:"Black Panther",posterUrl:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",overview:"King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war."},{id:329996,title:"Dumbo",posterUrl:"https://image.tmdb.org/t/p/w500/279PwJAcelI4VuBtdzrZASqDPQr.jpg",overview:"A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer."},{id:458723,title:"Us",posterUrl:"https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",overview:"Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited."},{id:99861,title:"Avengers: Age of Ultron",posterUrl:"https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",overview:"When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth\u2019s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure."},{id:283995,title:"Guardians of the Galaxy Vol. 2",posterUrl:"https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",overview:"The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage."},{id:324857,title:"Spider-Man: Into the Spider-Verse",posterUrl:"https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",overview:'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.'},{id:920,title:"Cars",posterUrl:"https://image.tmdb.org/t/p/w500/5damnMcRFKSjhCirgX3CMa88MBj.jpg",overview:"Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters."},{id:363088,title:"Ant-Man and the Wasp",posterUrl:"https://image.tmdb.org/t/p/w500/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg",overview:"Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission."},{id:118340,title:"Guardians of the Galaxy",posterUrl:"https://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",overview:"Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser."},{id:515248,title:"Someone Great",posterUrl:"https://image.tmdb.org/t/p/w500/h0nz5lIBXeUZChBNfwL08bLWQaU.jpg",overview:"An aspiring music journalist lands her dream job and is about to move to San Francisco when her boyfriend of nine years decides to call it quits. To nurse her broken heart, she and her two best friends spend one outrageous last adventure in New York City."},{id:263115,title:"Logan",posterUrl:"https://image.tmdb.org/t/p/w500/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",overview:"In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces."},{id:297802,title:"Aquaman",posterUrl:"https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",overview:"Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne."},{id:284053,title:"Thor: Ragnarok",posterUrl:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",overview:"Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela."},{id:498580,title:"Kanchana 3",posterUrl:"https://image.tmdb.org/t/p/w500/eV5uk58nNkTIDyn0HF9Hio1YBLX.jpg",overview:"Kanchana 3 is an UpcomingTamil horror Revenge film directed by Raghava Lawrence, starring himself, Oviya and Vedhika in the leading roles."},{id:453755,title:"Arctic",posterUrl:"https://image.tmdb.org/t/p/w500/w9GVlRteCgY103DN8CdFik3HUhO.jpg",overview:"A man stranded in the Arctic is finally about to receive his long awaited rescue. However, after a tragic accident, his opportunity is lost and he must then decide whether to remain in the relative safety of his camp or embark on a deadly trek through the unknown for potential salvation."},{id:485811,title:"Redcon-1",posterUrl:"https://image.tmdb.org/t/p/w500/jOYUbe61DQiY628inVkR1KERS30.jpg",overview:"After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it\u2019s only a matter of time before it breaks its boundaries and the biggest problem of all\u2026 any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds."},{id:423087,title:"6 Below: Miracle on the Mountain",posterUrl:"https://image.tmdb.org/t/p/w500/6ls2eq1ntyVolXNMVK6VqHjLPuy.jpg",overview:"An adrenaline seeking snowboarder gets lost in a massive winter storm in the back country of the High Sierras where he is pushed to the limits of human endurance and forced to battle his own personal demons as he fights for survival...."},{id:411728,title:"The Professor and the Madman",posterUrl:"https://image.tmdb.org/t/p/w500/gtGCDLhfjW96qVarwctnuTpGOtD.jpg",overview:"Professor James Murray begins work compiling words for the first edition of the Oxford English Dictionary in the mid 19th century and receives over 10,000 entries from a patient at Broadmoor Criminal Lunatic Asylum , Dr William Minor."},{id:338952,title:"Fantastic Beasts: The Crimes of Grindelwald",posterUrl:"https://image.tmdb.org/t/p/w500/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",overview:"Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause\u2014elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world."},{id:490132,title:"Green Book",posterUrl:"https://image.tmdb.org/t/p/w500/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",overview:"Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book."},{id:504172,title:"The Mule",posterUrl:"https://image.tmdb.org/t/p/w500/oeZh7yEz3PMnZLgBPhrafFHRbVz.jpg",overview:"Earl Stone, a man in his 80s, is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he\u2019s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates."}]},92:function(e,t,i){e.exports=i(189)}},[[92,1,2]]]);
//# sourceMappingURL=main.f2b645f2.chunk.js.map