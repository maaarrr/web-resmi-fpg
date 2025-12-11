<?php
// filepath: d:\xampp\htdocs\pt-fachri-property-group\server\api\contact.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->name) && 
    !empty($data->email) && 
    !empty($data->phone) && 
    !empty($data->message)
) {
    try {
        $query = "INSERT INTO contacts (name, email, phone, message) 
                  VALUES (:name, :email, :phone, :message)";
        
        $stmt = $db->prepare($query);
        
        $stmt->bindParam(":name", $data->name);
        $stmt->bindParam(":email", $data->email);
        $stmt->bindParam(":phone", $data->phone);
        $stmt->bindParam(":message", $data->message);
        
        if ($stmt->execute()) {
            echo json_encode(array(
                "success" => true, 
                "message" => "Pesan berhasil dikirim. Kami akan menghubungi Anda segera."
            ));
        } else {
            echo json_encode(array(
                "success" => false, 
                "message" => "Gagal mengirim pesan. Silakan coba lagi."
            ));
        }
    } catch(Exception $e) {
        echo json_encode(array(
            "success" => false, 
            "message" => "Error: " . $e->getMessage()
        ));
    }
} else {
    echo json_encode(array(
        "success" => false, 
        "message" => "Data tidak lengkap. Pastikan semua field terisi."
    ));
}
?>