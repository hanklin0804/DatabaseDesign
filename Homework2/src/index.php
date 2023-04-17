<?php
// 資料庫連接設置
$servername = "db";
$username = "hanklin";
$password = "mitlab";
$dbname = "test_database";

// 建立資料庫連接
$conn = new mysqli($servername, $username, $password, $dbname);

// 檢查連接是否成功
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 根據提交的表單執行相應的操作
if (isset($_POST['insert'])) {
    insert($_POST['name'], $_POST['email']);
} elseif (isset($_POST['delete'])) {
    delete($_POST['name']);
} elseif (isset($_POST['update'])) {
    update($_POST['old_name'], $_POST['new_name'], $_POST['update_email']);
}

// 插入功能
function insert($name, $email) {
    global $conn;
    $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    echo "<script>setTimeout(function() { window.location.href = 'index.html'; }, 3000);</script>";
}

// 刪除功能
function delete($name) {
    global $conn;
    $sql = "DELETE FROM users WHERE name='$name'";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    echo "<script>setTimeout(function() { window.location.href = 'index.html'; }, 3000);</script>";
}

// 更新功能
function update($old_name, $new_name, $email) {
    global $conn;
    $sql = "UPDATE users SET name='$new_name', email='$email' WHERE name='$old_name'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    echo "<script>setTimeout(function() { window.location.href = 'index.html'; }, 3000);</script>";
}

// 關閉資料庫連接
$conn->close();
?>