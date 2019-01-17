<?php

namespace Frontier\Providers;

use Illuminate\Support\Facades\Blade;
use Pluma\Support\Providers\ServiceProvider;

class FrontierServiceProvider extends ServiceProvider
{
    /**
     * Basename for the modules.
     *
     * @var string
     */
    protected $basename = 'Frontier';

    /**
     * The array of view composers.
     *
     * @var array
     */
    protected $composers;

    /**
     * The app's router instance.
     *
     * @var Pluma\Routing\Router
     */
    protected $router;

    /**
     * Array of Service Providers.
     *
     * @var array
     */
    protected $services = [
        '\Frontier\Providers\ThemeServiceProvider',
    ];

    /**
     * Boot the service.
     *
     * @return void
     */
    public function boot()
    {
        $this->bootRouter();

        $this->bootViewComposers();

        $this->bootBladeDirectives();
    }

    /**
     * Register the services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerServiceProviders();
    }

    /**
     * Boot the view composers.
     *
     * @return void
     */
    public function bootViewComposers()
    {
        $composers = require __DIR__.'/../config/composers.php';

        foreach ($composers as $composer) {
            view()->composer($composer['appears'], $composer['class']);
        }
    }

    /**
     * Boot the router instance.
     *
     * @return void
     */
    public function bootRouter()
    {
        $this->router = $this->app['router'];

        $this->router->aliasMiddleware('auth.admin', \Frontier\Middleware\AuthenticateAdmin::class);
        $this->router->aliasMiddleware('auth.guest', \Frontier\Middleware\RedirectToDashboardIfAuthenticated::class);
        $this->router->aliasMiddleware('breadcrumbs', \Frontier\Support\Breadcrumbs\Middlewares\Breadcrumbs::class);
    }

    /**
     * Register other providers for this module.
     *
     * @return void
     */
    public function registerServiceProviders()
    {
        foreach ($this->services as $service) {
            $this->app->register($service);
        }
    }

    /**
     * Registers additional Blade Directives in the context of this module.
     *
     * @return void
     */
    protected function bootBladeDirectives()
    {
        Blade::directive('field', function ($expression) {
            list($file, $args) = explode(',', $expression, 2);
            $file = str_replace("'", '', $file);

            return "<?php echo view('Theme::fields.$file', $args)->render(); ?>";
        });

        Blade::directive('submit', function ($expression) {
            return "<?php echo view('Theme::fields.submit', ['label' => $expression])->render(); ?>";
        });

        Blade::directive('card', function ($expression) {
            $expression = explode(',', $expression, 2);
            $file = str_replace("'", '', $expression[0]);
            $args = $expression[1] ?? '[]';

            return "<?php echo view('Theme::cards.$file', $args)->render(); ?>";
        });
    }
}
