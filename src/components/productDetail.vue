<template>
    <div>
      <div class="card">
          <div class="card-body">
            <h2 class="text-primary">{{product.productName}}</h2>
            <br/>
            <p>Price: <br/> <strong>{{formattedPrice}}</strong></p>
            <p>Category: <br/> <strong>{{product.CategoryName}}</strong></p>
            <p>Product ID: <br/> <strong>{{product.ProductID}}</strong></p>
            
          </div>
      </div>

       <br/>
        <router-link v-if="auth" :to="`/products/${this.$route.params.pk}/review`">
            <button type="button" class="btn btn-success">Add a Review</button>
        </router-link>
        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Sign In to Add a Review</button>
        </router-link>
        <br/>
        <br/>
        <router-link></router-link>
    </div>
</template>

<script>
export default {
    computed:{
      product(){
        var products =  this.$store.state.products;
        var thisProduct = products.find((aProduct)=> aProduct.ProductID == this.$route.params.pk)

        //console.log('Here is the movie you want', thisProduct);
        return thisProduct
      },
        formattedPrice(){
            return new Intl.NumberFormat("en-US",{
                style: 'currency',
                currency: 'USD'
            }).format(this.product.productPrice)
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>