var express = require('express');
var router = express.Router();


require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
 
	$ = require("jquery")(window);
});


router.get('/ping', function(request, response, next) {
	console.log('I was pinged brah');
    
    
    var myData = JSON.stringify({"ndbno":1225,"name":"Dulce de Leche","nutrients":[{"id":5144,"food":1225,"nutrientId":320,"name":"Vitamin A, RAE","group":"Vitamins","unit":"µg","value":"74","measures":[{"measureId":13452,"food":1225,"nutrient":5144,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"14","id":13452}]},{"id":5145,"food":1225,"nutrientId":406,"name":"Niacin","group":"Vitamins","unit":"mg","value":"0.210","measures":[{"measureId":13464,"food":1225,"nutrient":5145,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.040","id":13464}]},{"id":5146,"food":1225,"nutrientId":309,"name":"Zinc, Zn","group":"Minerals","unit":"mg","value":"0.79","measures":[{"measureId":13454,"food":1225,"nutrient":5146,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.15","id":13454}]},{"id":5147,"food":1225,"nutrientId":204,"name":"Total lipid (fat)","group":"Proximates","unit":"g","value":"7.35","measures":[{"measureId":13474,"food":1225,"nutrient":5147,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"1.40","id":13474}]},{"id":5148,"food":1225,"nutrientId":323,"name":"Vitamin E (alpha-tocopherol)","group":"Vitamins","unit":"mg","value":"0.20","measures":[{"measureId":13467,"food":1225,"nutrient":5148,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.04","id":13467}]},{"id":5149,"food":1225,"nutrientId":601,"name":"Cholesterol","group":"Lipids","unit":"mg","value":"29","measures":[{"measureId":13472,"food":1225,"nutrient":5149,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"6","id":13472}]},{"id":5150,"food":1225,"nutrientId":418,"name":"Vitamin B-12","group":"Vitamins","unit":"µg","value":"0.31","measures":[{"measureId":13462,"food":1225,"nutrient":5150,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.06","id":13462}]},{"id":5151,"food":1225,"nutrientId":318,"name":"Vitamin A, IU","group":"Vitamins","unit":"IU","value":"267","measures":[{"measureId":13471,"food":1225,"nutrient":5151,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"51","id":13471}]},{"id":5152,"food":1225,"nutrientId":306,"name":"Potassium, K","group":"Minerals","unit":"mg","value":"350","measures":[{"measureId":13466,"food":1225,"nutrient":5152,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"66","id":13466}]},{"id":5153,"food":1225,"nutrientId":303,"name":"Iron, Fe","group":"Minerals","unit":"mg","value":"0.17","measures":[{"measureId":13476,"food":1225,"nutrient":5153,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.03","id":13476}]},{"id":5154,"food":1225,"nutrientId":324,"name":"Vitamin D","group":"Vitamins","unit":"IU","value":"6","measures":[{"measureId":13463,"food":1225,"nutrient":5154,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"1","id":13463}]},{"id":5155,"food":1225,"nutrientId":404,"name":"Thiamin","group":"Vitamins","unit":"mg","value":"0.016","measures":[{"measureId":13459,"food":1225,"nutrient":5155,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.003","id":13459}]},{"id":5156,"food":1225,"nutrientId":415,"name":"Vitamin B-6","group":"Vitamins","unit":"mg","value":"0.016","measures":[{"measureId":13455,"food":1225,"nutrient":5156,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.003","id":13455}]},{"id":5157,"food":1225,"nutrientId":401,"name":"Vitamin C, total ascorbic acid","group":"Vitamins","unit":"mg","value":"2.6","measures":[{"measureId":13460,"food":1225,"nutrient":5157,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.5","id":13460}]},{"id":5158,"food":1225,"nutrientId":205,"name":"Carbohydrate, by difference","group":"Proximates","unit":"g","value":"55.35","measures":[{"measureId":13469,"food":1225,"nutrient":5158,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"10.52","id":13469}]},{"id":5159,"food":1225,"nutrientId":605,"name":"Fatty acids, total trans","group":"Lipids","unit":"g","value":"0.364","measures":[{"measureId":13461,"food":1225,"nutrient":5159,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.069","id":13461}]},{"id":5160,"food":1225,"nutrientId":435,"name":"Folate, DFE","group":"Vitamins","unit":"µg","value":"11","measures":[{"measureId":13475,"food":1225,"nutrient":5160,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"2","id":13475}]},{"id":5161,"food":1225,"nutrientId":262,"name":"Caffeine","group":"Other","unit":"mg","value":"0","measures":[{"measureId":13451,"food":1225,"nutrient":5161,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0","id":13451}]},{"id":5162,"food":1225,"nutrientId":328,"name":"Vitamin D (D2 + D3)","group":"Vitamins","unit":"µg","value":"0.2","measures":[{"measureId":13456,"food":1225,"nutrient":5162,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.0","id":13456}]},{"id":5163,"food":1225,"nutrientId":430,"name":"Vitamin K (phylloquinone)","group":"Vitamins","unit":"µg","value":"1.3","measures":[{"measureId":13478,"food":1225,"nutrient":5163,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.2","id":13478}]},{"id":5164,"food":1225,"nutrientId":269,"name":"Sugars, total","group":"Proximates","unit":"g","value":"49.74","measures":[{"measureId":13470,"food":1225,"nutrient":5164,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"9.45","id":13470}]},{"id":5165,"food":1225,"nutrientId":291,"name":"Fiber, total dietary","group":"Proximates","unit":"g","value":"0.0","measures":[{"measureId":13446,"food":1225,"nutrient":5165,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.0","id":13446}]},{"id":5166,"food":1225,"nutrientId":646,"name":"Fatty acids, total polyunsaturated","group":"Lipids","unit":"g","value":"0.375","measures":[{"measureId":13465,"food":1225,"nutrient":5166,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.071","id":13465}]},{"id":5167,"food":1225,"nutrientId":203,"name":"Protein","group":"Proximates","unit":"g","value":"6.84","measures":[{"measureId":13450,"food":1225,"nutrient":5167,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"1.30","id":13450}]},{"id":5168,"food":1225,"nutrientId":305,"name":"Phosphorus, P","group":"Minerals","unit":"mg","value":"193","measures":[{"measureId":13453,"food":1225,"nutrient":5168,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"37","id":13453}]},{"id":5169,"food":1225,"nutrientId":255,"name":"Water","group":"Proximates","unit":"g","value":"28.71","measures":[{"measureId":13458,"food":1225,"nutrient":5169,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"5.45","id":13458}]},{"id":5170,"food":1225,"nutrientId":208,"name":"Energy","group":"Proximates","unit":"kcal","value":"315","measures":[{"measureId":13468,"food":1225,"nutrient":5170,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"60","id":13468}]},{"id":5171,"food":1225,"nutrientId":304,"name":"Magnesium, Mg","group":"Minerals","unit":"mg","value":"22","measures":[{"measureId":13448,"food":1225,"nutrient":5171,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"4","id":13448}]},{"id":5172,"food":1225,"nutrientId":645,"name":"Fatty acids, total monounsaturated","group":"Lipids","unit":"g","value":"2.143","measures":[{"measureId":13473,"food":1225,"nutrient":5172,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.407","id":13473}]},{"id":5173,"food":1225,"nutrientId":606,"name":"Fatty acids, total saturated","group":"Lipids","unit":"g","value":"4.534","measures":[{"measureId":13447,"food":1225,"nutrient":5173,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.861","id":13447}]},{"id":5174,"food":1225,"nutrientId":301,"name":"Calcium, Ca","group":"Minerals","unit":"mg","value":"251","measures":[{"measureId":13457,"food":1225,"nutrient":5174,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"48","id":13457}]},{"id":5175,"food":1225,"nutrientId":307,"name":"Sodium, Na","group":"Minerals","unit":"mg","value":"129","measures":[{"measureId":13449,"food":1225,"nutrient":5175,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"25","id":13449}]},{"id":5176,"food":1225,"nutrientId":405,"name":"Riboflavin","group":"Vitamins","unit":"mg","value":"0.405","measures":[{"measureId":13477,"food":1225,"nutrient":5176,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.077","id":13477}]}],"measures":[{"measureId":13446,"food":1225,"nutrient":5165,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.0","id":13446},{"measureId":13447,"food":1225,"nutrient":5173,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.861","id":13447},{"measureId":13448,"food":1225,"nutrient":5171,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"4","id":13448},{"measureId":13449,"food":1225,"nutrient":5175,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"25","id":13449},{"measureId":13450,"food":1225,"nutrient":5167,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"1.30","id":13450},{"measureId":13451,"food":1225,"nutrient":5161,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0","id":13451},{"measureId":13452,"food":1225,"nutrient":5144,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"14","id":13452},{"measureId":13453,"food":1225,"nutrient":5168,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"37","id":13453},{"measureId":13454,"food":1225,"nutrient":5146,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.15","id":13454},{"measureId":13455,"food":1225,"nutrient":5156,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.003","id":13455},{"measureId":13456,"food":1225,"nutrient":5162,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.0","id":13456},{"measureId":13457,"food":1225,"nutrient":5174,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"48","id":13457},{"measureId":13458,"food":1225,"nutrient":5169,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"5.45","id":13458},{"measureId":13459,"food":1225,"nutrient":5155,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.003","id":13459},{"measureId":13460,"food":1225,"nutrient":5157,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.5","id":13460},{"measureId":13461,"food":1225,"nutrient":5159,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.069","id":13461},{"measureId":13462,"food":1225,"nutrient":5150,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.06","id":13462},{"measureId":13463,"food":1225,"nutrient":5154,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"1","id":13463},{"measureId":13464,"food":1225,"nutrient":5145,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.040","id":13464},{"measureId":13465,"food":1225,"nutrient":5166,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.071","id":13465},{"measureId":13466,"food":1225,"nutrient":5152,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"66","id":13466},{"measureId":13467,"food":1225,"nutrient":5148,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.04","id":13467},{"measureId":13468,"food":1225,"nutrient":5170,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"60","id":13468},{"measureId":13469,"food":1225,"nutrient":5158,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"10.52","id":13469},{"measureId":13470,"food":1225,"nutrient":5164,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"9.45","id":13470},{"measureId":13471,"food":1225,"nutrient":5151,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"51","id":13471},{"measureId":13472,"food":1225,"nutrient":5149,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"6","id":13472},{"measureId":13473,"food":1225,"nutrient":5172,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.407","id":13473},{"measureId":13474,"food":1225,"nutrient":5147,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"1.40","id":13474},{"measureId":13475,"food":1225,"nutrient":5160,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"2","id":13475},{"measureId":13476,"food":1225,"nutrient":5153,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.03","id":13476},{"measureId":13477,"food":1225,"nutrient":5176,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.077","id":13477},{"measureId":13478,"food":1225,"nutrient":5163,"label":"tbsp","eqv":19.0,"qty":1.0,"value":"0.2","id":13478}]});
    
    /*$.getJSON( "http://markche.com:8080/NutriTrac/rest/food/1225", function( data ) {
     
        myData = data;
        console.log("This is my data from GET to Java API");
        console.log(myData.name);
        
        response.send(myData);
     });*/

    
      
   
/*    $.post( "http://localhost:8080/NutriTrac/rest/foodObj", myData, function( data ) {
     
        myReturnData = data;
        console.log("This is my data from GET to Java API");
        console.log(myReturnData);
        
        response.send(myReturnData);
     });*/
    
    
    
    $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/NutriTrac/rest/foodObj',
    data: myData,
    success: function(data) { myReturnData = data;
        console.log("This is my data from GET to Java API");
        console.log(myReturnData);
        
        response.send(myReturnData); },
    contentType: "application/json",
    dataType: 'json'
});
    
    
    
    
    
    
    
});

module.exports = router;