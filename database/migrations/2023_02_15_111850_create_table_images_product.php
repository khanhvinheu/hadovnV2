<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableImagesProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::create('images_product', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_product')->unsigned();
            $table->foreign('id_product')->references('id')->on('Products')->onDelete('cascade');
            $table->string('path')->unique();
            $table->boolean('hidden')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images_product');
    }
}
