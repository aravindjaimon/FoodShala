<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Menu extends ResourceController
{
	protected $modelName = 'App\Models\MenuModel';
	protected $format =  'json';
	public function index()
	{
		$post = $this->model->findAll();
		return $this->respond($post);
	}
}
