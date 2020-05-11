<?php 
    include "../models/listCompanies.php";
?>

    <h1>Årets företag</h1>
    <table id="posts" cellspacing="0" cellpadding="1" width="300">
    <tr> 
        <th> Logga </th>
        <th> Företag </th>
        <th> Kod </th>
    </tr>
    <?php
        while($row = mysqli_fetch_array($result)) : ?>
            <tr>
                <td><img src="<?php echo $row['img']; ?>" width="50"></td>
                <td><?php echo $row["name"]; ?></td>
                <td><?php echo $row["code"]; ?></td>
            </tr>
        <?php endwhile ?>
</table>