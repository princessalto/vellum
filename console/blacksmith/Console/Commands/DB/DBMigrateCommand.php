<?php

namespace Blacksmith\Console\Commands\DB;

use Blacksmith\Console\Commands\Migrations\Support\BaseCommand;
use Illuminate\Database\Migrations\Migrator;
use Pluma\Support\Console\Traits\ConfirmableTrait;

class DBMigrateCommand extends BaseCommand
{
    use ConfirmableTrait;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:migrate
                           {--database= : The database connection to use.}
                           {--force : Force the operation to run when in production.}
                           {--path= : The path to the migrations files to be executed.}
                           {--realpath : Indicate any provided migration file paths are pre-resolved absolute    paths.}
                           {--pretend : Dump the SQL queries that would be run.}
                           {--seed : Indicates if the seed task should be re-run.}
                           {--step : Force the migrations to be run so they can be rolled back individually.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run the database migrations. Also named as db:migrate';

    /**
     * The migrator instance.
     *
     * @var \Illuminate\Database\Migrations\Migrator
     */
    protected $migrator;

    /**
     * Create a new migration command instance.
     *
     * @param  \Illuminate\Database\Migrations\Migrator  $migrator
     * @return void
     */
    public function __construct(Migrator $migrator)
    {
        parent::__construct();

        $this->migrator = $migrator; // app('migrator');
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $n = microtime(true);
        if (! $this->confirmToProceed()) {
            return;
        }

        $this->prepareDatabase();

        // Next, we will check to see if a path option has been defined. If it has
        // we will use the path relative to the root of this installation folder
        // so that migrations may be run for any path within the applications.
        $this->migrator->run($this->getMigrationPaths(), [
            'pretend' => $this->option('pretend'),
            'step' => $this->option('step'),
        ]);

        // Once the migrator has run we will grab the note output and send it out to
        // the console screen, since the migrator itself functions without having
        // any instances of the OutputInterface contract passed into the class.
        foreach ($this->migrator->getNotes() as $note) {
            $this->output->writeln($note);
        }

        // Finally, if the "seed" option has been given, we will re-run the database
        // seed task to re-populate the database, which is convenient when adding
        // a migration and a seed at the same time, as it is only this command.
        if ($this->option('seed')) {
            $this->call('db:seed', ['--force' => true]);
        }

        $this->info("{$this->checkmark()} Took ".$this->time($n)." to finish the command");
    }

    /**
     * Prepare the migration database for running.
     *
     * @return void
     */
    protected function prepareDatabase()
    {
        $this->migrator->setConnection($this->option('database'));

        if (! $this->migrator->repositoryExists()) {
            $this->call(
                'migrate:install', ['--database' => $this->option('database')]
            );
        }
    }
}
