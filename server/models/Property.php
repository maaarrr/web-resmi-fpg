<?php
class Property {
    private $conn;
    private $table_name = "properties";

    public $id;
    public $title;
    public $description;
    public $price;
    public $location;
    public $image_url;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function read() {
        $query = "SELECT id, title, description, price, location, image_url FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function create() {
        $query = "INSERT INTO " . $this->table_name . " (title, description, price, location, image_url) VALUES (:title, :description, :price, :location, :image_url)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':location', $this->location);
        $stmt->bindParam(':image_url', $this->image_url);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
?>