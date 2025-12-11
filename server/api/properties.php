<?php
// filepath: d:\xampp\htdocs\pt-fachri-property-group\server\api\properties.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    $query = "SELECT 
                id, 
                name, 
                location, 
                price, 
                description, 
                type,
                bedrooms,
                bathrooms,
                land_area,
                building_area,
                image, 
                status,
                created_at 
              FROM properties 
              WHERE status = 'available'
              ORDER BY created_at DESC";
    
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    $properties = array();
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $property_item = array(
            "id" => $row['id'],
            "name" => $row['name'],
            "location" => $row['location'],
            "price" => number_format($row['price'], 0, ',', '.'),
            "priceRaw" => $row['price'],
            "description" => $row['description'],
            "type" => $row['type'],
            "bedrooms" => $row['bedrooms'],
            "bathrooms" => $row['bathrooms'],
            "landArea" => $row['land_area'],
            "buildingArea" => $row['building_area'],
            "image" => $row['image'],
            "status" => $row['status'],
            "created_at" => $row['created_at']
        );
        array_push($properties, $property_item);
    }
    
    echo json_encode(array(
        "success" => true,
        "data" => $properties
    ));
    
} catch(Exception $e) {
    echo json_encode(array(
        "success" => false,
        "message" => "Error: " . $e->getMessage()
    ));
}
?>