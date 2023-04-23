<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('detail',500)->nullable();
            $table->longText('description',1000)->nullable(); // chi tiết
            $table->string('discount')->nullable(); //giảm giá
            $table->string('trade_mark')->nullable(); //giảm giá
            $table->bigInteger('id_category')->unsigned();
            $table->foreign('id_category')->references('id')->on('Categorys')->onDelete('cascade');
            $table->boolean('status')->default(true);
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
        Schema::dropIfExists('Products');
    }
}
