<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOptionsProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('options_product', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_product')->nullable();
            $table->foreign('id_product')->references('id')->on('Products')->onDelete('cascade');
            $table->unsignedBigInteger('id_color')->nullable();
            $table->foreign('id_color')->references('id')->on('product_colors')->onDelete('cascade');
            $table->unsignedBigInteger('id_size')->nullable();
            $table->foreign('id_size')->references('id')->on('product_sizes')->onDelete('cascade');
            $table->json('list_size');
//            $table->string('color');
//            $table->string('size');
            $table->integer('price');
            $table->integer('total');
            $table->string('note')->nullable();
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
//        Schema::dropIfExists('options_product');
        Schema::table('options_product', function (Blueprint $table) {
            $table->dropColumn('id_product');
            $table->dropColumn('id_color');
            $table->dropColumn('id_size');

            // $table->dropForeign('product_id');
        });
    }
}
