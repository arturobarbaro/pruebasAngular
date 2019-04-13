<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Entrenamientos */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Entrenamientos', 'url' => ['index']];
$this->params['breadcrumbs'][] = $model->actividad->actividad;
\yii\web\YiiAsset::register($this);
?>
<div class="entrenamientos-view">

    <h1><?= Html::encode($model->actividad->actividad) ?></h1>
    <hr>
    <?php if (!Yii::$app->user->isGuest): ?>
    <?php if (Yii::$app->user->id == $model->usuario_id): ?>
    <p>
        <?= Html::a('Modificar',
        ['update'],
        ['class' => 'btn btn-primary',
         'data' => [
             'method' => 'post',
             'params' => [ 'id' => $model->id], // <- extra level
         ],
        ]) ?>
        <?= Html::a('Eliminar', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => '¿Desea realmente borrar esta actividad?',
                'method' => 'post',
            ],
        ])?>
    </p>
    <?php endif; ?>
    <?php endif; ?>

    <div class="">
        <?= $this->render('_detalles', [
            'model' => $model,
            'comentarios' => $comentarios,
        ]) ?>
    </div>

    <div class="row">
        <?php
        pintarComentarios($comentarios, $this, $model);

        /**
         * Funcion recursiva que pinta los comentarios asociadas a una actividad
         * y/o a otro comentario
         * @param  [type] $comentarios [description]
         * @param  [type] $vista       [description]
         * @param  [type] $model       [description]
         * @return [type]              [description]
         */
        function pintarComentarios($comentarios, $vista, $model)
        {
            ?>
            <?php if ($comentarios) : ?>
                <ul>
                <?php foreach ($comentarios as $comentario) : ?>
                    <p>
                    <?= $vista->render('../comentarios/_detalles',[
                        'model' => $model,
                        'comentario' => $comentario
                    ]) ?>
                    <?php pintarComentarios($comentario->comentarios, $vista, $model)?>
                </p>
                <?php endforeach ?>
                </ul>
                <?php endif;
        }
        ?>
    </div>

</div>
