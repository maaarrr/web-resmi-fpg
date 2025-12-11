<?php
// filepath: d:\xampp\htdocs\pt-fachri-property-group\server\api\property-detail.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$id = isset($_GET['id']) ? $_GET['id'] : die();

try {
    $query = "SELECT * FROM properties WHERE id = :id LIMIT 1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":id", $id);
    $stmt->execute();
    
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if($row) {
        $property = array(
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
        
        echo json_encode(array(
            "success" => true,
            "data" => $property
        ));
    } else {
        echo json_encode(array(
            "success" => false,
            "message" => "Property not found"
        ));
    }
    
} catch(Exception $e) {
    echo json_encode(array(
        "success" => false,
        "message" => "Error: " . $e->getMessage()
    ));
}
?>