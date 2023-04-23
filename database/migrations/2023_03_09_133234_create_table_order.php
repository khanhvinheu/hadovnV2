<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_code')->unique();
            $table->integer('payment_methods')->nullable();
            $table->integer('payment_status')->nullable();
            $table->integer('pack_status')->nullable();
            $table->integer('check_status')->nullable();
            $table->string('note')->nullable();
            $table->bigInteger('id_member')->unsigned()->nullable();
            $table->foreign('id_member')->references('id')->on('Order_member')->onDelete('cascade');
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
        Schema::dropIfExists('Orders');
    }
}
