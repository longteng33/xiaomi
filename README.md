# xiaomi
https://longteng33.github.io/xiaomi/  
vue创建小米商城  

## 1、vue-router  
1、多页面应用，通过router来切换路由，显示不同页面  
2、在根组件App.vue中，用<router-view/>展示现在所在路由的组件  
3、把关于路由的配置提到了router文件夹中的index.js文件中，模块化  
4、在配置router的js文件中，引入vue，引入vue-router，以及引入要在此配置的组件  
5、动态引入的组件，在前面不用通过import先引入。在加载首页的时候，不会去加载这个js文件，等到我们要去使用到当前这个路由的时候，才会去加载。这样对性能是有提高  
6、

## 2、axios  
1、在配置axios的baseURL的时候，因为要放到GitHub上的要是https的，所以地址协议要是https  
2、相应拦截器  
请求成功之后，只需要response中的data.data，不需要返回所有的response；请求失败之后，就获取一下错误信息，并弹出弹窗向用户展示错误信息  

## 3、vuex
1、在vuex的js文件中，namespaced属性，给这个模块一个命名空间
```
    namespaced: true,
```  
2、在vuex中存放一些不同组件都要用到、或需要操作的数据，是一个数据的（中央容器） 
 父传子数据可以通过自定义属性  
 子传父数据可以通过自定义事件  
 兄弟组件传值，使用vuex更方便  
3、直接改变state中数据的方法写在 mutations中，异步改变state中数据的方法写在actions中  
4、  mutations和actions中的方法名可以用大小写不同来加以区分，以此判断这是一个 mutations方法还是一个actions方法  
5、对actions中的方法用dispatch  
对 mutations中的方法用commit  

## 4、vuex-persistedstate自动缓存插件  
1、不使用vuex-persistedstate插件的话，就需要将数据存储到localStorage中，每次打开页面的时候取localStorage中去取  
在login函数（登录的时候）
```
存
localStorage.setItem("eStudy",JSON.stringify({
    loggedIn:true,
    info:JSON.stringify(data)
}))
取
const eStudy=JSON.parse(localStorage.getItem("eStudy))||{}
```

2、在vuex的index.js文件中引入vuex-persistedstate，  
```
import createPersistedState from "vuex-persistedstate";
```
3、在vuex中使用插件，在index.js中写一个plugins属性，它是一个数组，存放所有的插件，把createPersistedState写进去  
4、createPersistedState写成一个函数执行方式，它的参数是一个对象，  
1）key: "eStudy", //key为存储持久状态的密钥  
2）paths: ["user"],//path为可以部分保留状态的所有路径的数组。 如果没有给出路径，则完整状态将保留。 必须使用点符号指定路径。  
//如果使用模块，请包含模块名称，下面的user为模块名称  
// 会自动把user中的值存到localStorage中去  
**刷新页面，或者下次打开页面的时候，就去localStorage中去取**  
3）subscriber,插件的钩子函数,初始化的时候执行  
在初始化的时候，调用user中的checkedLogin函数，检查有没有过期  
参数store是当前vuex的实例  
```
subscriber(store) {
      store.dispatch("user/checkedLogin")
      return function (handler) {
        return store.subscribe(handler)
      }
    }
```
5、user/checkedLogin函数用于检验token有没有过期，发送此请求需要在首部中把Token传过去  
common，设置到所有的headers上
```
api.defaults.headers.common["Token"]=context.state.info.token;
```

## 5、header.vue组件  
1、在多个页面都会有用到header部分，所以把这部分提出来写成一个组件  
2、将header组件在main.js中定义成一个全局组件，这样在所有的组件内都能使用  
```
Vue.component("app-header",header);
```  
3、header组件在不同页面的时候可能有不同的展示，可通过添加不同类来实现  
4、this.$route.name是当前所在页面的路由  
通过这个判断当前是什么页面，然后在header组件中添加不同的类，获取消一些类，就会在不同页面有不一样的显示了  
5、点击登录按钮，跳转到登录页面，切换路由，所以使用router-link  
to属性，写要跳转的路由
```
<router-link to="/login" class="not-logined" @click.native="changeIsLogin(true)">登录</router-link>
```
to属性也可写成对象,name是在router中配置时给的此路由的名字  
```
<router-link :to="{name:'cart'}">
```
6、点击登录就跳到登录，点击注册就跳到注册，点击不同的地方时，传不同的值过去，以此记录点击的是什么地方  
7、


## 6、css文件引入  
1、@import url()是sass的语法，引入其它的样式文件  
引入的文件名需要带后缀，如.css
```
<style lang="scss" scoped>
@import url(../css/iconfont.css);
@import url(../css/style.css);
</style>
2、css的scoped属性，是当前的css样式只对当前组件有用（局部的作用域），这些xss样式只针对在这个style下写的样式  
3、引入的css没有局部的作用域，在子组件中引入的css，也会作用于父组件  
```

## 7、页面数据的获取和更新  
1、在打开页面，或刷新页面的时候，会触发钩子函数created,这时候发送请求，通过?发送请求参数,例如传top请求头部数据
2、发送get请求，通过?发送请求参数，传不同的参数请求头部不同地方（top/left/carousel/index）的数据   
```
api.get("/menu?type=top").then()
```
3、then中的回调函数，使用箭头函数，因为不使用箭头函数的话，this指向是不对的(这种情况可以在函数外面_this=this来保存this)  
4、在header组件中和用户相关的一些数据，用户有登录才获取，用户没有登录就不需要获取了  
5、需要发送请求成功之后，获取到用户的数据了，根据用户的数据，才得到另一个数据，所以需要写一个异步的操作，写一个async函数，先执行了请求数据，然后才有下面的操作  
```
async mounted() {
    // 如果登录就获取，如果没有登录就不获取
    if (this.isLoggedIn) {
      await this.$store.dispatch("cart/CHANGEcartGoodsList");
      this.totalCartGoods = this.cartGoodsList.reduce((sum, item) => {
        return (sum += Number(item.quantity));
      }, 0);
    }
  }
```

## 8、表单验证插件vee-validate  
1、引入表单验证插件 vee-validate，并引入引入中文语言包  
```
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);
Validator.localize('zhzh_CN',zh_CN);
```
2、vee-validate插件3版本引入后有问题，下载其它版本  
```
npm i vee-validate@2.2.15 --save
```

## 9、登录页面  
1、点击“账号登录”或“账号注册”，点击谁谁就高亮，这是通过改变isLogin这个数据，并于:class绑定实现  
2、点击登录按钮，如何判断当前点的是登录按钮还是注册按钮，通过isLogin判断，并于value绑定，显示不同文字  
3、vue的操作中，大部分就是通过操作数据来实现页面逻辑  
4、document.title是当前页面的标题  
5、清除验证的信息，验证重置  
```
this.$validator.reset()
```
6、点击登录或注册按钮后，在前端先对数据进行验证，减轻后台压力  
7、如果是登录就调用登录方法，如果是注册就调用注册方法  
8、登录方法和注册方法都写在vuex中，这些方法都是发送请求，异步地更改state中的数据  


## 10、首页  
1、在网页中使用的图片，大部分都是通过发送ajax请求回来，然后再填充到页面中去  
2、有时会使用一些再本地的图片，通过src引入，但是写在src中的东西都会经过webpack的编译  
将图片放在public文件夹，绑定src，使用require引入   
```
<img :src="require('../../public/promo1.jpg')" alt />
```
3、使用v-for，必须有一个key值，但是再template上不能有key值，此时要把key值移到其它标签上  
4、点击每个商品项，就跳转到此商品详情页  
通过query传一写此商品的参数过去，商品详情页使用这些参数去发送请求，请求此商品的数据  
商品详情页怎么获取这些参数  
通过this.$route.query获取  
```
 <router-link
                    :to="{name:'product',
                  query:{pid:list.pid}}"
                    target="_blank"
                  >
...
          </router-link>         
```
5、再刚打开页面的时候，新建此页面组件，触发created钩子函数，在created函数中请求此页面所需要的数据  

## 11、商品详情页  
1、在created钩子函数中，请求商品请求数据  
2、选中版本、选中颜色的联动  
写两个数据，一个是indexActive1是选择的版本，一个是indexActive2是选择的手机颜色  
3、展示的图片用如下形式获取  
```
 this.imgs=this.productOptions[this.indexActive1].list[this.indexActive2].imgs;
 ```
4、如果productOptions是一个空数组，就会报错没有list这个属性，所以先判断.productOptions.length != 0，是不是一个空数组  
5、点击加入购物车的回调，先向添加购物车接口发送请求，成功之后，调用vuex中的actions中的方法，获取购物车信息（因为添加购物车后，购物车信息改变了，此时重新获取）  
## 12、购物车页面  
1、cartGoodsList购物车商品的数组  
1、勾选了哪一个商品，就将它的id加入selectGoods_id这个数组，这个数组用于收集选中的购物车商品的id  
3、根据id去cartGoodsList购物车商品的数组再找这个商品  
4、用数据isSelectedAll记录是否全选，当选中的商品与购物车中的商品数一样时，就是全选  
5、加减购物车商品，向加减购物车商品接口发送请求，请求成功后再获取购物车商品，更新购物车  
6、勾选商品的总数、勾选的商品的总价，这些数据是根据所勾选的商品而变化的，所以将他们放在computed计算属性当中，  



## 13、生成订单页  
1、在元素挂载之后，触发的钩子函数mounted中请求购物车数据  
2、使用async函数，当请求的数据回来之后，然后才得到orderGoods这个数据，（它是根据请求回来的数据算出来的）  
3、地址列表，是倒序排列的，所以用计算属性获取一个倒序数组  
4、点击了哪个地址的修改，先展示地址修改表单和背景蒙版，将所点击的这项的数据给表单 。这样表单中就会有所点击这项的数据  
5、点击地址保存，调用store中的actons中的方法，并把表单数据传过去，在actions中发送请求异步地修改地址数据  
6、地址数据写在computed中，它发生改变的时候，会自动更新  



