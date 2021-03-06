<?php

namespace Drupal\purge_ui\Tests;

use Drupal\Core\Url;
use Drupal\purge\Tests\WebTestBase;

/**
 * Testbase for tests testing \Drupal\purge_ui\Controller\DashboardController.
 */
abstract class DashboardTestBase extends WebTestBase {

  /**
   * The Drupal user entity.
   *
   * @var \Drupal\user\Entity\User
   */
  protected $adminUser;

  /**
   * Route providing the main configuration form of the purge module.
   *
   * @var string|\Drupal\Core\Url
   */
  protected $route = 'purge_ui.dashboard';

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = ['purge_ui'];

  /**
   * Setup the test.
   */
  public function setUp($switch_to_memory_queue = TRUE) {
    parent::setUp($switch_to_memory_queue);
    $this->adminUser = $this->drupalCreateUser(['administer site configuration']);
    if (is_string($this->route)) {
      $this->route = Url::fromRoute($this->route);
    }
  }

  /**
   * Test if the form is at its place and has the right permissions.
   */
  public function testFormAccess() {
    $this->drupalGet($this->route);
    $this->assertResponse(403);
    $this->drupalLogin($this->adminUser);
    $this->drupalGet($this->route);
    $this->assertRaw('When content on your website changes, your purge setup will take care of refreshing external caching systems and CDNs.');
    $this->assertResponse(200);
    $this->drupalGet(Url::fromRoute('system.performance_settings'));
  }

}
