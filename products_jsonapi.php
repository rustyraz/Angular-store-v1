<?php
header("Content-type: text/javascript");
$products = [];

$products = [
	[
		"name" => "Medium Pizza",
		"price" => 9,
		"image" => [
			[
				"thumb" => "images/products/thumb/mediumPizza.jpg",
				"full" => "images/products/mediumPizza.jpg"
			],
			[
				"full" => "images/products/largePizza2.jpg",
			]
		],
		"description" => "Medium size pizza with cheese",
		"canPurchase" => true,
		"soldOut" => false,
		"reviews" => [
			[
				"rating" => 1,
				"comment" => "Was too spicy",
				"author" => "nasty@comment.com"
			]
				
			
		]
	],
	[
		"name" => "Medium Pizza",
		"price" => 9,
		"image" => [
			[
				"thumb" => "images/products/thumb/mediumPizza.jpg",
				"full" => "images/products/mediumPizza.jpg"
			],
			[
				"full" => "images/products/largePizza2.jpg",
			]
		],
		"description" => "Medium size pizza with cheese",
		"canPurchase" => true,
		"soldOut" => false,
		"reviews" => [
			[
				"rating" => 1,
				"comment" => "Was too spicy",
				"author" => "nasty@comment.com"
			]
				
			
		]
	],
	[
		"name" => "Medium Pizza",
		"price" => 9,
		"image" => [
			[
				"thumb" => "images/products/thumb/mediumPizza.jpg",
				"full" => "images/products/mediumPizza.jpg"
			],
			[
				"full" => "images/products/largePizza2.jpg",
			]
		],
		"description" => "Medium size pizza with cheese",
		"canPurchase" => true,
		"soldOut" => false,
		"reviews" => [
			[
				"rating" => 1,
				"comment" => "Was too spicy",
				"author" => "nasty@comment.com"
			]
				
			
		]
	]
];

echo json_encode($products);
exit();
?>