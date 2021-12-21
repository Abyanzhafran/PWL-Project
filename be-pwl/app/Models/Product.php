<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // use HasFactory;

    protected $table = 'produk';
    protected $fillable = ['id_produk', 'nama_produk', 'harga', 'stok_barang', 'merk_barang', 'link_gambar'];
}
